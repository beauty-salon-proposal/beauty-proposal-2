import type { ApprovalState } from "../lib/approval";

/**
 * FAQ copy uses only facts present in the supplied material. Anything the
 * owner has never confirmed (prices, hours, address, policies) answers with
 * an invitation to ask instead of an invented policy (FR-015, NFR-012).
 */
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  approval: ApprovalState;
}

export const faqs: FaqItem[] = [
  {
    id: "location",
    question: "Where is the salon?",
    answer:
      "We are in Vadavalli, Coimbatore, Tamil Nadu. Message us on WhatsApp and we will share directions.",
    approval: "needs-owner-approval",
  },
  {
    id: "booking",
    question: "How do I book?",
    answer:
      "Send us a WhatsApp message with what you need and your preferred date. We reply personally to confirm — the website does not confirm a booking by itself.",
    approval: "needs-owner-approval",
  },
  {
    id: "bridal",
    question: "Do you take bridal bookings?",
    answer:
      "Yes, bridal makeup and styling is our main focus. Ask us about your date so we can check it for you.",
    approval: "needs-owner-approval",
  },
  {
    id: "course",
    question: "Is the beautician course running?",
    answer:
      "We offer a 10-day beautician course. Message us on WhatsApp for the current batch dates, fee and seats.",
    approval: "needs-owner-approval",
  },
  {
    id: "prices",
    question: "What are your prices and timings?",
    answer:
      "Prices and timings change, so we share them directly on WhatsApp rather than publishing them here. Ask us and we will send the current details.",
    approval: "needs-owner-approval",
  },
];
