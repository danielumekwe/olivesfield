import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/site";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import LearningApproach from "@/components/LearningApproach";
import SectionHeading from "@/components/SectionHeading";
import Photo from "@/components/Photo";
import AdmissionsCta from "@/components/AdmissionsCta";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "How we teach at The Olivesfield School: Montessori education, practical computer education, entrepreneurship and leadership studies, and public speaking, in a caring environment with personalised attention.",
  alternates: { canonical: "/academics/" },
  openGraph: pageOpenGraph("/academics/", "Academics at The Olivesfield School"),
};

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="A strong foundation for a successful future"
        intro="Our learning environment is designed to nurture young minds academically, morally, socially and creatively through quality education and personalised attention."
        photo="science-practical-bench"
        photoAlt="Students in white coats working together at a bench during a science practical"
      />

      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our approach"
            title="What makes learning at Olivesfield distinctive"
            text="Alongside quality classroom teaching, four areas receive special attention throughout a child’s time with us."
          />
          <div className="mt-10">
            <LearningApproach />
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-16 md:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4" data-reveal="left">
            <Photo
              name="pupils-sandal-making"
              alt="Pupils in green uniforms showing sandals they have made in a practical skills session"
              sizes="(min-width: 1024px) 280px, 50vw"
              className="aspect-[4/5] w-full rounded-3xl object-cover"
            />
            <Photo
              name="students-market-stall"
              alt="Students seated at a stall displaying drinks and snacks they prepared for sale"
              sizes="(min-width: 1024px) 280px, 50vw"
              className="mt-8 aspect-[4/5] w-full rounded-3xl object-cover"
            />
          </div>
          <div data-reveal="right">
            <p className="eyebrow">Teaching and learning</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">Experienced teachers, engaged learners</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                With experienced and passionate teachers, modern learning facilities and a safe, caring atmosphere, we
                help children grow with confidence, curiosity and excellence.
              </p>
              <p>
                Project-based learning, presentations and discussion forums give pupils regular opportunities to think
                critically, work in teams, lead and solve problems, skills that prepare them for lifelong learning and
                leadership in a global society.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border border-olive-600/40 bg-white p-6">
              <h3 className="text-xl font-semibold">Which class is right for my child?</h3>
              <p className="mt-2 leading-relaxed text-muted">
                Our admissions team will be glad to talk through your child’s age and stage and advise on placement.
              </p>
              <Link href="/admissions/" className="mt-3 inline-block font-semibold text-ember-700 underline underline-offset-4">
                Speak to admissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AdmissionsCta />
    </>
  );
}
