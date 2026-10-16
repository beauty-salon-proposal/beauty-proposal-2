import { composeEnquiry, waLink, type EnquiryIntent } from "../lib/whatsapp";
import { site } from "../data/site";

const NAME_MIN = 2;
const NAME_MAX = 80;
const NOTE_MAX = 500;

interface Errors {
  name?: string;
  date?: string;
  note?: string;
}

function setError(form: HTMLFormElement, field: string, message: string): void {
  const slot = form.querySelector<HTMLElement>(`[data-error-for="${field}"]`);
  const input = form.querySelector<HTMLElement>(`[name="${field}"]`);
  if (slot) slot.textContent = message;
  if (input) {
    if (message) input.setAttribute("aria-invalid", "true");
    else input.removeAttribute("aria-invalid");
  }
}

function validate(form: HTMLFormElement): Errors {
  const data = new FormData(form);
  const errors: Errors = {};

  const name = String(data.get("name") ?? "").trim();
  if (name.length < NAME_MIN) errors.name = "Please enter your name.";
  else if (name.length > NAME_MAX)
    errors.name = `Please keep your name under ${NAME_MAX} characters.`;

  const date = String(data.get("date") ?? "").trim();
  if (date && Number.isNaN(Date.parse(date))) errors.date = "Please enter a valid date.";

  const note = String(data.get("note") ?? "").trim();
  if (note.length > NOTE_MAX) errors.note = `Please keep your note under ${NOTE_MAX} characters.`;

  return errors;
}

function showStatus(form: HTMLFormElement, message: string, state: "ok" | "error"): void {
  const status = form.querySelector<HTMLElement>("[data-form-status]");
  if (!status) return;
  status.textContent = message;
  status.dataset.state = state;
}

function fallback(form: HTMLFormElement, message: string): void {
  const status = form.querySelector<HTMLElement>("[data-form-status]");
  showStatus(
    form,
    `We could not open WhatsApp automatically. Call ${site.phoneDisplay} or copy the message below and send it yourself.`,
    "error",
  );
  if (!status) return;

  const existing = status.nextElementSibling;
  if (existing?.matches("[data-fallback]")) existing.remove();

  const wrap = document.createElement("div");
  wrap.dataset.fallback = "";
  wrap.className = "note";

  const text = document.createElement("p");
  text.style.margin = "0 0 .6rem";
  text.textContent = message;

  const copy = document.createElement("button");
  copy.type = "button";
  copy.className = "btn btn-ghost";
  copy.textContent = "Copy message";
  copy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(message);
      copy.textContent = "Copied";
    } catch {
      copy.textContent = "Select the text above to copy";
    }
  });

  const link = document.createElement("a");
  link.className = "btn";
  link.href = `https://wa.me/${site.whatsappDigits}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Open WhatsApp";
  link.style.marginInlineStart = ".6rem";

  wrap.append(text, copy, link);
  status.after(wrap);
}

function handleSubmit(event: SubmitEvent): void {
  event.preventDefault();
  const form = event.currentTarget as HTMLFormElement;

  const errors = validate(form);
  for (const field of ["name", "date", "note"] as const) {
    setError(form, field, errors[field] ?? "");
  }

  const firstInvalid = Object.keys(errors)[0];
  if (firstInvalid) {
    const input = form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`);
    input?.focus();
    showStatus(form, "Please check the highlighted field.", "error");
    return;
  }

  const data = new FormData(form);
  const message = composeEnquiry({
    name: String(data.get("name") ?? ""),
    intent: String(data.get("intent") ?? "general") as EnquiryIntent,
    date: String(data.get("date") ?? "") || undefined,
    note: String(data.get("note") ?? "") || undefined,
  });

  const url = waLink(message);
  const opened = window.open(url, "_blank");

  if (!opened) {
    fallback(form, message);
    return;
  }
  opened.opener = null;

  showStatus(
    form,
    "WhatsApp should open with your message ready. Review it and press Send there — that is what sends it, and it does not confirm a booking.",
    "ok",
  );
}

function bindEnquiryForms(): void {
  document.querySelectorAll<HTMLFormElement>("[data-enquiry-form]").forEach((form) => {
    if (form.dataset.bound === "true") return;
    form.dataset.bound = "true";
    form.addEventListener("submit", handleSubmit);
    form.querySelectorAll<HTMLElement>("[name]").forEach((input) => {
      input.addEventListener("input", () => setError(form, input.getAttribute("name") ?? "", ""));
    });
  });
}

document.addEventListener("astro:page-load", bindEnquiryForms);
bindEnquiryForms();
