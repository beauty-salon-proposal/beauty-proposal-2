/**
 * ============================================================================
 * src/pages/Services.jsx  —  THE SERVICES PAGE
 * ----------------------------------------------------------------------------
 * Lists every service from src/data/services.js as a card. Adding a service
 * to that data file automatically adds a card here.
 * ============================================================================
 */

import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import FAQList from "../components/FAQList";
import WhatsAppLink from "../components/WhatsAppLink";
import Reveal from "../components/Reveal";
import { site } from "../data/site";
import { services } from "../data/services";
import { faqs } from "../data/faqs";

import stylingImage from "../assets/images/services/salon-styling-session.webp";
import piercingImage from "../assets/images/services/ear-piercing-service.webp";
import hairImage from "../assets/images/hair/floral-hairstyle.webp";
import bridalImage from "../assets/images/bridal/bridal-makeup-styling.webp";
import facialImage from "../assets/images/skin-care/facial-service-poster.webp";

/**
 * Which photo belongs to which service.
 * The key must match the `id` in src/data/services.js.
 */
const serviceImages = {
  "bridal-makeup": {
    src: bridalImage,
    alt: "Traditional bridal makeup and styling, with jasmine flowers in the hair",
  },
  "hair-styling": {
    src: hairImage,
    alt: "Hairstyle decorated with fresh flowers, seen from behind",
  },
  "ear-piercing": {
    src: piercingImage,
    alt: "Close-up of an ear-piercing service being performed",
  },
  "facials-skin-care": {
    src: facialImage,
    alt: "Facial and skin-care service poster",
  },
};

export default function Services() {
  return (
    <>
      <Seo
        title={`Salon Services in Vadavalli, Coimbatore | ${site.brandName}`}
        description="Bridal makeup, hair styling and cuts, facials and skin care, and ear piercing at Kalai's beauty & academy, Vadavalli, Coimbatore. Prices on request."
      />

      <PageHero
        eyebrow="Services"
        title="Salon services, done properly"
        intro="From bridal makeup to everyday hair and skin care — tell us what you need and we will confirm the details, timing and price on WhatsApp."
      />

      {/* -------- The grid of service cards -------- */}
      <section className="container section">
        <h2 className="sr-only">Our services</h2>
        <div className="grid grid-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              image={serviceImages[service.id]?.src}
              alt={serviceImages[service.id]?.alt}
            />
          ))}
        </div>
      </section>

      {/* -------- How it works -------- */}
      <section className="container section">
        <div className="split">
          <Reveal className="media media-wide">
            <img
              src={stylingImage}
              alt="A styling service being carried out on a client in the salon"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow">How it works</p>
            <h2>Ask first, then book</h2>
            <p className="muted">
              Send us the service you want and a preferred date. We check the schedule and reply
              personally to confirm. Nothing is booked until we say so.
            </p>
            <WhatsAppLink intent="salon" label="Ask about a service" />
          </Reveal>
        </div>
      </section>

      {/* -------- FAQ -------- */}
      <section className="container section">
        <Reveal as="p" className="eyebrow">
          Questions
        </Reveal>
        <Reveal as="h2">Before you visit</Reveal>
        <FAQList items={faqs} />
      </section>
    </>
  );
}
