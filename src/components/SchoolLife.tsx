import Link from "next/link";
import Photo from "./Photo";
import SectionHeading from "./SectionHeading";
import { ArrowIcon, CheckIcon } from "./Icons";
import { activities } from "@/lib/site";

export default function SchoolLife() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
        <div data-reveal="left">
          <SectionHeading
            eyebrow="School life"
            title="Learning that goes beyond the classroom"
            text="Through excursions, project-based activities, chess classes, book clubs and interactive experiences, our pupils broaden their creativity, confidence and real-world understanding."
          />
          <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {activities.map((a) => (
              <li key={a} className="flex items-center gap-3 font-medium text-navy-900">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-olive-100 text-olive-800">
                  <CheckIcon width={16} height={16} />
                </span>
                {a}
              </li>
            ))}
          </ul>
          <Link href="/school-life/" className="btn btn-primary mt-8">
            Discover school life <ArrowIcon width={18} height={18} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4" data-reveal="right">
          <Photo
            name="girl-child-day-assembly"
            alt="Pupils in party hats gathered in front of a colourful mural for the International Day of the Girl Child"
            sizes="(min-width: 1024px) 600px, 100vw"
            className="col-span-2 aspect-[16/9] w-full rounded-3xl object-cover"
          />
          <Photo
            name="sports-day-games"
            alt="Pupils taking part in games on the field at a school sports day"
            sizes="(min-width: 1024px) 300px, 50vw"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
          <Photo
            name="science-practical-group"
            alt="Students gathered around a bench during a science practical"
            sizes="(min-width: 1024px) 300px, 50vw"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
