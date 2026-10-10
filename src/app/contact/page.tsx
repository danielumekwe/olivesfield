import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";
import { directionsUrl, mapEmbedUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact The Olivesfield School: Plot 47/48, Block 16, Ayodele Fanoiki Street, Magodo, Lagos. Call or WhatsApp 0803 961 4529 or 0806 051 7038, or email info@olivesfieldschool.com.ng.",
  alternates: { canonical: "/contact/" },
  openGraph: pageOpenGraph("/contact/", "Contact The Olivesfield School"),
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="Get in touch with us"
        intro="We would love to hear from you. Visit our school, give us a call or send us a message today."
      />

      <section className="py-14 md:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div data-reveal="left">
            <h2 className="text-3xl font-semibold">School office</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              Whether you are making an enquiry, seeking admission for your child or simply want to learn more about The
              Olivesfield School, our team is always ready to assist you.
            </p>
            <div className="mt-8">
              <ContactDetails />
            </div>
          </div>
          <div data-reveal="right">
            <h2 className="mb-5 text-3xl font-semibold">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section aria-labelledby="find-us" className="bg-cream-100 py-14 md:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="find-us" className="text-3xl font-semibold">
              Find us in Magodo
            </h2>
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary self-start">
              Open directions in Google Maps
            </a>
          </div>
          <iframe
            title="Map showing the location of The Olivesfield School"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            data-reveal="up"
            className="mt-8 h-[26rem] w-full rounded-3xl border-0 shadow-sm"
          />
        </div>
      </section>
    </>
  );
}
