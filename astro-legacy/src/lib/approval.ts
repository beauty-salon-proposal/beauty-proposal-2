export type ApprovalState = "draft" | "needs-owner-approval" | "approved" | "do-not-publish";

/**
 * BUILD_MODE=production publishes only `approved` records and fails the build
 * when a required slot has no approved record. Any other value is a preview
 * build, which renders pending records for owner review and is served noindex.
 *
 * On Vercel, a production deployment (VERCEL_ENV=production) is treated as
 * production automatically, so a plain `npm run build` deploys the live site;
 * set BUILD_MODE=preview explicitly on Vercel only to force a noindex preview
 * build. Anywhere else, BUILD_MODE=production is required for a live build.
 *
 * This exists because every image in IMAGE_PLACEMENT_MANIFEST.csv is still
 * `NEEDS OWNER APPROVAL BEFORE PUBLICATION` (STATUS.md DEC-009 / BL-002).
 */
export type BuildMode = "preview" | "production";

const onVercelProduction =
  process.env.VERCEL_ENV === "production" && process.env.BUILD_MODE !== "preview";

export const buildMode: BuildMode =
  process.env.BUILD_MODE === "production" || onVercelProduction ? "production" : "preview";

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
