import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import FounderMessage from "@/components/FounderMessage";
import AdmissionsCta from "@/components/AdmissionsCta";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About the School",
  description:
    "Founded in September 2006 by Christianah Edem, The Olivesfield School in Magodo, Lagos nurtures children into confident, responsible and well-rounded individuals. Read our story, mission and vision.",
  alternates: { canonical: "/about/" },
  openGraph: pageOpenGraph("/about/", "About The Olivesfield School"),
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the school"
        title="Nurturing children with purpose since 2006"
        intro="A safe, caring and stimulating environment in Magodo, where children of all backgrounds are given equal opportunities to learn, grow and excel."
        photo="staff-team"
        photoAlt="Olivesfield teachers and staff smiling and posing together on the school lawn"
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div data-reveal="left">
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">About The Olivesfield School</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Founded in September 2006 by Christianah Edem, The Olivesfield School was established with a passion to
                contribute meaningfully to the development of quality education in Nigeria. Since inception, the school
                has remained committed to nurturing children into confident, responsible and well-rounded individuals
                equipped for success in an ever-evolving world.
              </p>
              <p>
                Located in Magodo GRA, The Olivesfield School provides a safe, caring and stimulating environment where
                children of all backgrounds are given equal opportunities to learn, grow and excel academically, morally
                and socially. We believe that every child possesses unique potential, and our mission is to help them
                discover, develop and maximise their abilities through quality education and character building.
              </p>
              <p>
                Learning here goes beyond traditional classroom teaching. Our pupils are exposed to diverse educational
                experiences that encourage creativity, leadership, teamwork and independent thinking. Through activities
                such as project-based learning, chess classes, book clubs, excursions, music training and interactive
                learning programmes, we prepare our pupils for lifelong learning and global relevance.
              </p>
              <p>
                Our school is equipped with modern educational and recreational facilities designed to support effective
                teaching and learning. From integrated computer systems and musical instruments to well-equipped
                playgrounds and sports facilities, we provide the exposure and opportunities that enable our pupils to
                compete confidently with international standards.
              </p>
            </div>
          </div>
          <div className="space-y-5 lg:pt-14" data-reveal="right">
            <Photo
              name="school-building-staff"
              alt="Staff lined up on the lawn in front of the green and orange Olivesfield school building"
              sizes="(min-width: 1024px) 460px, 100vw"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
            />
            <Photo
              name="college-girls-blazers"
              alt="College students in navy blazers and pink ties posing in a line beside the school building"
              sizes="(min-width: 1024px) 460px, 100vw"
              className="aspect-[4/3] w-full rounded-3xl object-cover object-top shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Our purpose and promise"
            title="Shaping bright futures"
            text="We believe that every child is uniquely gifted and deserves an environment where they can learn, grow and thrive with confidence."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article data-reveal="left" className="rounded-3xl bg-navy-900 p-8 text-white md:p-10">
              <h3 className="text-2xl font-semibold !text-laurel-200">Our mission</h3>
              <p className="mt-4 text-lg leading-relaxed text-navy-100">
                To provide a high-quality and well-rounded education that nurtures children academically, morally,
                socially and creatively in a safe and caring environment, while equipping them with the knowledge,
                confidence, discipline and values needed to become responsible leaders and lifelong learners.
              </p>
            </article>
            <article data-reveal="right" className="rounded-3xl border border-cream-200 bg-white p-8 md:p-10">
              <h3 className="text-2xl font-semibold text-olive-800">Our vision</h3>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                To be a leading educational institution recognised for excellence in character building, academic
                achievement and holistic child development, raising future leaders who will positively impact society
                and compete confidently on a global standard.
              </p>
            </article>
          </div>
          <div data-reveal="up" className="mx-auto mt-12 max-w-3xl text-center">
            <h3 className="text-2xl font-semibold">Nurturing with purpose</h3>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              We are committed to creating a supportive and inspiring atmosphere where pupils are encouraged to discover
              their talents, build confidence and develop the skills needed to become responsible leaders and positive
              contributors to society. Through innovative teaching methods and engaging learning experiences, we ensure
              that every child receives a well-rounded education.
            </p>
          </div>
        </div>
      </section>

      <FounderMessage />
      <AdmissionsCta />
    </>
  );
}
