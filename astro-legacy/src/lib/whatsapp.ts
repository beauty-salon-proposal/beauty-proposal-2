import { site } from "../data/site";

/**
 * Single source for the WhatsApp destination (BR-009).
 *
 * The digits are built from the number printed on supplied promotional
 * material and are NOT yet owner-verified (STATUS.md DEC-002 / BL-001).
 * No message may be sent to production until the owner confirms on a phone.
 */
export function waLink(message: string): string {
  return `https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export function telLink(): string {
  return `tel:${site.phoneE164}`;
}

export type EnquiryIntent = "general" | "bridal" | "salon" | "course" | "jewellery";

const INTENT_LABEL: Record<EnquiryIntent, string> = {
  general: "a general enquiry",
  bridal: "bridal makeup and styling",
  salon: "salon services",
  course: "the 10-day beautician course",
  jewellery: "jewellery",
};

export function intentMessage(intent: EnquiryIntent): string {
  return `Hi ${site.brandName}, I'd like to enquire about ${INTENT_LABEL[intent]}.`;
}

export interface EnquiryFields {
  name: string;
  intent: EnquiryIntent;
  date?: string;
  note?: string;
}

export function composeEnquiry(fields: EnquiryFields): string {
  const parts = [intentMessage(fields.intent), `Name: ${fields.name.trim()}.`];
  parts.push(`Preferred date: ${fields.date ? fields.date : "not specified"}.`);
  const note = fields.note?.trim();
  parts.push(note ? `Note: ${note}` : "Note: none");
  return parts.join(" ");
}
