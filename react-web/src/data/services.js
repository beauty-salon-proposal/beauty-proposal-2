/**
 * ============================================================================
 * src/data/services.js  —  THE LIST OF SERVICES OFFERED
 * ----------------------------------------------------------------------------
 * Each entry becomes a card on the Services page and on the home page.
 *
 * To ADD a service: copy one `{ ... }` block, change the values.
 * To REMOVE one:     delete its `{ ... }` block.
 * To REORDER:        move the whole block up or down. Order = display order.
 *
 * `featured: true`      -> also shown in the "Everything under one roof"
 *                          section on the home page.
 * `category`            -> controls the WhatsApp message wording and which
 *                          image is used on the Services page.
 * ============================================================================
 */

export const services = [
  {
    id: "bridal-makeup",
    name: "Bridal makeup & styling",
    summary:
      "Makeup and styling for weddings and wedding functions, planned around your date, outfit and jewellery.",
    category: "bridal",
    featured: true,
    // Text on the WhatsApp button for this service.
    enquiryLabel: "Ask about a date",
  },
  {
    id: "hair-styling",
    name: "Hair styling & cuts",
    summary: "Haircuts, styling and occasion hairstyles, including floral and traditional looks.",
    category: "hair",
    featured: true,
    enquiryLabel: "Ask about hair services",
  },
  {
    id: "facials-skin-care",
    name: "Facials & skin care",
    summary: "Facial and skin-care treatments. Ask us which option suits you before booking.",
    category: "skin-care",
    featured: true,
    enquiryLabel: "Ask about skin care",
  },
  {
    id: "ear-piercing",
    name: "Ear piercing",
    summary: "Ear-piercing service. Message us beforehand to confirm timing and availability.",
    category: "piercing",
    featured: false,
    enquiryLabel: "Ask about ear piercing",
  },
  // Prices are intentionally NEVER stored here. We answer with "ask us on
  // WhatsApp" so we can never show an out-of-date price.
];

/**
 * A ready-made shortcut: only the services flagged `featured: true` above.
 * The home page uses this. You do not need to edit it.
 */
export const featuredServices = services.filter((service) => service.featured);
