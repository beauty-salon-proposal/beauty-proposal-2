import type { ApprovalState } from "../lib/approval";

/**
 * Service names come from the supplied source material (PDR.md §3, "core
 * service areas"). The owner reviewed and confirmed the service list on
 * 2026-10-10 (STATUS.md DEC-004/DEC-009); no price is stored (BR-004).
 */
export interface ServiceItem {
  id: string;
  name: string;
  summary: string;
  category: "bridal" | "hair" | "skin-care" | "piercing" | "other";
  featured: boolean;
  approval: ApprovalState;
  /** Never populated without explicit owner approval (BR-004). */
  priceText?: string;
  enquiryLabel: string;
  image?: ImageMetadata;
  alt?: string;
}

export const services: ServiceItem[] = [
  {
    id: "bridal-makeup",
    name: "Bridal makeup & styling",
    summary:
      "Makeup and styling for weddings and wedding functions, planned around your date, outfit and jewellery.",
    category: "bridal",
    featured: true,
    approval: "approved",
    enquiryLabel: "Ask about a date",
  },
  {
    id: "hair-styling",
    name: "Hair styling & cuts",
    summary: "Haircuts, styling and occasion hairstyles, including floral and traditional looks.",
    category: "hair",
    featured: true,
    approval: "approved",
    enquiryLabel: "Ask about hair services",
  },
  {
    id: "facials-skin-care",
    name: "Facials & skin care",
    summary: "Facial and skin-care treatments. Ask us which option suits you before booking.",
    category: "skin-care",
    featured: true,
    approval: "approved",
    enquiryLabel: "Ask about skin care",
  },
  {
    id: "ear-piercing",
    name: "Ear piercing",
    summary: "Ear-piercing service. Message us beforehand to confirm timing and availability.",
    category: "piercing",
    featured: false,
    approval: "approved",
    enquiryLabel: "Ask about ear piercing",
  },
];

export const featuredServices = services.filter((service) => service.featured);
