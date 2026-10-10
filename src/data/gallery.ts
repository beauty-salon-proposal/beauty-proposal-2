import type { ApprovalState } from "../lib/approval";
import { canRender } from "../lib/approval";

import heroFloralArch from "../assets/images/hero/hero-floral-arch.webp";
import bridalMakeupStyling from "../assets/images/bridal/bridal-makeup-styling.webp";
import floralHairstyle from "../assets/images/hair/floral-hairstyle.webp";
import salonStylingSession from "../assets/images/services/salon-styling-session.webp";
import earPiercingService from "../assets/images/services/ear-piercing-service.webp";
import salonFrontage from "../assets/images/salon/salon-frontage.webp";

export type GalleryCategoryId = "bridal" | "hair" | "salon";

export interface GalleryItem {
  id: string;
  src: ImageMetadata;
  alt: string;
  caption?: string;
  category: GalleryCategoryId;
  approval: ApprovalState;
  /** Provenance for the internal review; never rendered publicly. */
  sourceFilename: string;
  showOnWebsite: boolean;
}

/**
 * Every record below maps to IMAGE_PLACEMENT_MANIFEST.csv, whose
 * `approval_status` column is `NEEDS OWNER APPROVAL BEFORE PUBLICATION` for
 * all ten supplied files. The render layer filters on `canRender`, so a
 * production build (BUILD_MODE=production) emits an empty gallery until the
 * owner approves these records.
 *
 * Held back entirely, never imported here:
 *  - pending-approval/course/beautician-course-poster.webp      (DEC-005)
 *  - pending-approval/skin-care/facial-service-poster.webp      (DEC-004)
 *  - pending-approval/about/certificate-presentation.webp       (credential + consent unverified)
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "bridal-makeup-styling",
    src: bridalMakeupStyling,
    alt: "Traditional bridal makeup and styling, with jasmine flowers in the hair",
    caption: "Bridal makeup & styling",
    category: "bridal",
    approval: "needs-owner-approval",
    sourceFilename: "634794997_1684423212921278_2203394907307037514_n-20261010-161317.png",
    showOnWebsite: true,
  },
  {
    id: "hero-floral-arch",
    src: heroFloralArch,
    alt: "Finished look photographed in front of a flower-decorated arch",
    category: "bridal",
    approval: "needs-owner-approval",
    sourceFilename: "277095117_511627113907092_3850832331328932814_n-20261010-161249.png",
    showOnWebsite: true,
  },
  {
    id: "floral-hairstyle",
    src: floralHairstyle,
    alt: "Hairstyle decorated with fresh flowers, seen from behind",
    caption: "Hair styling",
    category: "hair",
    approval: "needs-owner-approval",
    sourceFilename: "806298887_1777251896640285_991364652189716329_n-20261010-161306.png",
    showOnWebsite: true,
  },
  {
    id: "salon-styling-session",
    src: salonStylingSession,
    alt: "A styling service being carried out on a client in the salon",
    category: "salon",
    approval: "needs-owner-approval",
    sourceFilename: "506349456_735904525619999_9213513988583421324_n-20261010-161333.png",
    showOnWebsite: true,
  },
  {
    id: "ear-piercing-service",
    src: earPiercingService,
    alt: "Close-up of an ear-piercing service being performed",
    category: "salon",
    approval: "needs-owner-approval",
    sourceFilename: "611240444_723931113809076_8393895832211770797_n-20261010-161318.png",
    showOnWebsite: true,
  },
  {
    id: "salon-frontage",
    src: salonFrontage,
    alt: "Salon frontage with the signboard visible",
    caption: "The salon",
    category: "salon",
    approval: "needs-owner-approval",
    sourceFilename: "753488131_1658173045285930_3435398103174638187_n-20261010-161313.png",
    showOnWebsite: true,
  },
];

export const renderableGalleryItems = galleryItems.filter(
  (item) => item.showOnWebsite && canRender(item.approval),
);

export function galleryByCategory(category: GalleryCategoryId): GalleryItem[] {
  return renderableGalleryItems.filter((item) => item.category === category);
}
