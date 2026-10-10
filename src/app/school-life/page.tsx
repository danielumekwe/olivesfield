import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/site";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Photo, { type PhotoName } from "@/components/Photo";
import Facilities from "@/components/Facilities";
import AdmissionsCta from "@/components/AdmissionsCta";
import SectionHeading from "@/components/SectionHeading";
import { ArrowIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "School Life",
  description:
    "Life at The Olivesfield School: chess classes, book clubs, project-based learning, excursions, music training, sports and cultural celebrations that build confidence, teamwork and leadership.",
  alternates: { canonical: "/school-life/" },
  openGraph: pageOpenGraph("/school-life/", "School Life at The Olivesfield School"),
};

const blocks: { title: string; text: string; photo: PhotoName; alt: string }[] = [
  {
    title: "Clubs and enrichment",
    text: "Chess classes, book clubs, music training and interactive learning programmes help pupils develop critical thinking, creativity and a love of learning.",
    photo: "student-election",
    alt: "Students in school uniform queueing to cast their votes in a ballot box on the school field",
  },
  {
    title: "Projects and enterprise",
    text: "Through project-based learning and our entrepreneurship and leadership studies, pupils learn self-reliance by making and presenting their own work.",
    photo: "students-food-enterprise",
    alt: "Two students smiling behind packaged food products they prepared",
  },
  {
    title: "Sports and play",
    text: "Sports facilities and well-equipped playgrounds give every child room to be active, build teamwork and enjoy friendly competition.",
    photo: "sports-day-race",
    alt: "Pupils running in a race on a grass track during sports day",
  },
  {
    title: "Culture and celebration",
    text: "School celebrations bring pupils, teachers and families together and give children the confidence to perform and take part.",
    photo: "cultural-day-attire",
    alt: "A pupil wearing traditional attire and coral beads for a cultural day celebration",
  },
];

export default function SchoolLifePage() {
  return (
    <>
      <PageHeader
        eyebrow="School life"
        title="Education beyond the four walls of the classroom"
        intro="Our pupils are exposed to diverse experiences that encourage creativity, leadership, teamwork and independent thinking."
        photo="cultural-day-dance"
        photoAlt="Pupils in traditional dress performing a dance at a cultural day celebration"
      />

      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our educational adventures"
            title="Experiences that build confident, well-rounded learners"
          />
          <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2">
            {blocks.map((b, i) => (
              <article key={b.title} data-reveal={i % 2 ? "right" : "left"}>
                <div className="photo-zoom rounded-3xl">
                <Photo
                  name={b.photo}
                  alt={b.alt}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="aspect-[3/2] w-full rounded-3xl object-cover object-[center_25%]"
                />
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{b.title}</h3>
                <p className="mt-2 text-lg leading-relaxed text-muted">{b.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/gallery/" className="btn btn-outline">
              See more in our gallery <ArrowIcon width={18} height={18} />
            </Link>
          </div>
        </div>
      </section>

      <Facilities />
      <AdmissionsCta />
    </>
  );
}
