import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Enquire about admission to The Olivesfield School, Magodo, Lagos. Call, WhatsApp, send a message or arrange a visit, and our team will guide you on the next steps.",
  alternates: { canonical: "/admissions/" },
  openGraph: pageOpenGraph("/admissions/", "Admissions at The Olivesfield School"),
};

const steps = [
  {
    title: "Get in touch",
    text: "Call or WhatsApp us, or send the enquiry form on this page. Tell us a little about your child.",
  },
  {
    title: "Visit the school",
    text: "Come and see our learning environment in Magodo and meet the team. We would love to welcome you.",
  },
  {
    title: "Take the next step",
    text: "Our team will answer your questions and guide you through enrolling your child.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Join the Olivesfield family"
        intro="Whether you are seeking admission for your child or simply want to learn more about the school, our team is always ready to assist you."
        photo="independence-day-flags"
        photoAlt="Three smiling pupils in traditional dress holding Nigerian flags"
      />

      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHeading center eyebrow="How to enquire" title="Three simple steps to get started" />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li
                key={s.title}
                data-reveal="up"
                style={{ "--reveal-delay": `${i * 130}ms` } as React.CSSProperties}
                className="rounded-3xl border border-cream-200 bg-white p-8"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 font-display text-xl text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="enquire" className="bg-cream-100 py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div data-reveal="left">
            <SectionHeading
              eyebrow="Admission enquiry"
              title="Talk to our admissions team"
              text="Visit our school, give us a call or send us a message today. We look forward to welcoming you into a warm, caring and inspiring learning community."
            />
            <div className="mt-8">
              <ContactDetails />
            </div>
          </div>
          <div data-reveal="right">
            <ContactForm defaultTopic="Admission for my child" />
          </div>
        </div>
      </section>
    </>
  );
}
