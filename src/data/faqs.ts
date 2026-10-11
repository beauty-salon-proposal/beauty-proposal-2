import type { ApprovalState } from "../lib/approval";

/**
 * FAQ copy uses only owner-supplied facts. The address and opening hours come
 * from the confirmed Google Maps listing (STATUS.md DEC-003 / DEC-004); prices
 * and other unconfirmed details still answer with an invitation to ask rather
 * than an invented policy (FR-015, NFR-012).
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
      "We are at Seendur Complex, Linganur Road, Linganoor, Vadavalli, Coimbatore – 641041, and open daily from 10 AM to 8 PM. Use the “Get directions” link on the contact page for the map.",
    approval: "approved",
  },
  {
    id: "booking",
    question: "How do I book?",
    answer:
      "Send us a WhatsApp message with what you need and your preferred date. We reply personally to confirm — the website does not confirm a booking by itself.",
    approval: "approved",
  },
  {
    id: "bridal",
    question: "Do you take bridal bookings?",
    answer:
      "Yes, bridal makeup and styling is our main focus. Ask us about your date so we can check it for you.",
    approval: "approved",
  },
  {
    id: "course",
    question: "Is the beautician course running?",
    answer:
      "We offer a 10-day beautician course. Message us on WhatsApp for the current batch dates, fee and seats.",
    approval: "approved",
  },
  {
    id: "prices",
    question: "What are your prices and timings?",
    answer:
      "We are open daily from 10 AM to 8 PM. Prices vary by service, so we share the current rates on WhatsApp rather than publishing them here.",
    approval: "approved",
  },
];
