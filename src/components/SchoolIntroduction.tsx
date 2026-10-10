import Link from "next/link";
import Photo from "./Photo";
import { ArrowIcon } from "./Icons";

export default function SchoolIntroduction() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <Photo
            name="school-building"
            alt="Students standing beside the school bus in front of The Olivesfield College building"
            sizes="(min-width: 1024px) 560px, 100vw"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
          />
          <p className="absolute -bottom-5 right-4 max-w-[15rem] rounded-2xl bg-navy-900 px-5 py-4 font-display text-lg italic leading-snug text-white shadow-lg">
            “Moulding lives to lofty heights”
          </p>
        </div>
        <div>
          <p className="eyebrow">About our school</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">An enriching educational experience</h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Our learning environment is designed to inspire curiosity, creativity and excellence. With experienced and
              passionate teachers, modern classrooms, integrated computer systems, musical instruments, sports facilities
              and engaging extracurricular activities, we ensure that every pupil receives quality education that meets
              international standards.
            </p>
            <p>
              Every child is valued and given equal opportunities to grow and thrive in a safe, caring and stimulating
              environment. Our focus on discipline, character building, academic excellence and holistic development
              makes us a trusted choice for parents who desire the very best for their children.
            </p>
          </div>
          <Link href="/about/" className="btn btn-primary mt-8">
            Our story, mission and vision <ArrowIcon width={18} height={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
