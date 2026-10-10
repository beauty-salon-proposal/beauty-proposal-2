export type ApprovalState = "draft" | "needs-owner-approval" | "approved" | "do-not-publish";

/**
 * BUILD_MODE=production publishes only `approved` records and fails the build
 * when a required slot has no approved record. Any other value is a preview
 * build, which renders pending records for owner review and is served noindex.
 *
 * This exists because every image in IMAGE_PLACEMENT_MANIFEST.csv is still
 * `NEEDS OWNER APPROVAL BEFORE PUBLICATION` (STATUS.md DEC-009 / BL-002).
 */
export type BuildMode = "preview" | "production";

export const buildMode: BuildMode =
  process.env.BUILD_MODE === "production" ? "production" : "preview";

export const isProduction = buildMode === "production";

export function canRender(approval: ApprovalState): boolean {
  if (approval === "do-not-publish") return false;
  if (isProduction) return approval === "approved";
  return approval === "approved" || approval === "needs-owner-approval";
}

/** Build-time guard used by pages that must never ship an unapproved record. */
export function assertRenderable(approval: ApprovalState, label: string): void {
  if (canRender(approval)) return;
  throw new Error(
    `[approval] "${label}" is "${approval}" and cannot be published in ${buildMode} mode. ` +
      `Record owner approval in src/data/gallery.ts before running BUILD_MODE=production.`,
  );
}
