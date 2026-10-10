import Photo from "./Photo";
import SectionHeading from "./SectionHeading";
import { facilities } from "@/lib/site";

export default function Facilities() {
  return (
    <section className="bg-cream-100 py-16 md:py-24">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <SectionHeading
            eyebrow="Facilities"
            title="Spaces designed for teaching, learning and play"
            text="Our school is equipped with modern educational and recreational facilities designed to support effective teaching and learning."
          />
          <ul className="flex flex-wrap gap-2.5 lg:justify-end" data-reveal="right">
            {facilities.map((f) => (
              <li key={f} className="rounded-full border border-olive-600/40 bg-white px-4 py-2 text-sm font-semibold text-olive-800">
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {(
            [
              ["nursery-classroom", "Young children seated around a table in a brightly decorated classroom", "A colourful early-years classroom"],
              ["sports-school-field", "Pupils running a race on the school field while classmates watch", "The school field in use"],
              ["creche-room", "A bright room with small beds, soft toys and play mats for the youngest children", "A room for our youngest children"],
            ] as const
          ).map(([name, alt, caption], i) => (
            <figure
              key={name}
              data-reveal="up"
              style={{ "--reveal-delay": `${i * 130}ms` } as React.CSSProperties}
              className="photo-zoom overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              <Photo name={name} alt={alt} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-5 py-4 font-display text-lg text-navy-900">{caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
