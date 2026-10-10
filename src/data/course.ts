import type { ApprovalState } from "../lib/approval";

/**
 * Curriculum topics are the list recorded in docs/USER_STORIES.md (AC-US004-1)
 * and must be verified by the owner before launch (STATUS.md DEC-005).
 *
 * No fee, batch date, duration beyond the sourced "10-day" wording, certificate
 * or outcome may be added here (BR-004, NFR-012).
 */
export interface CourseModule {
  id: string;
  title: string;
  summary: string;
  approval: ApprovalState;
}

export const course = {
  title: "10-day beautician course",
  durationText: "10 days",
  durationVerified: false,
  summary:
    "A short practical course covering everyday salon skills, from skin and hair basics through to bridal makeover practice.",
  feeText: undefined as string | undefined,
  scheduleText: undefined as string | undefined,
  certificateText: undefined as string | undefined,
};

export const courseModules: CourseModule[] = [
  {
    id: "skin",
    title: "Skincare & facials",
    summary: "Skin basics, facial steps and the services a salon performs day to day.",
    approval: "needs-owner-approval",
  },
  {
    id: "hair",
    title: "Hair care & styling",
    summary: "Hair care fundamentals, cutting and styling practice.",
    approval: "needs-owner-approval",
  },
  {
    id: "makeup",
    title: "Makeup: basics to advanced",
    summary: "Build from core techniques to fuller occasion and bridal looks.",
    approval: "needs-owner-approval",
  },
  {
    id: "threading",
    title: "Threading & waxing",
    summary: "Shaping and hair-removal techniques used in regular salon work.",
    approval: "needs-owner-approval",
  },
  {
    id: "nails",
    title: "Manicure & pedicure",
    summary: "Hand and foot care routines and finishing.",
    approval: "needs-owner-approval",
  },
  {
    id: "bridal",
    title: "Basic bridal makeover",
    summary: "Putting the pieces together for a complete bridal look.",
    approval: "needs-owner-approval",
  },
];
