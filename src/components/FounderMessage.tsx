import Photo from "./Photo";
import { site } from "@/lib/site";

export default function FounderMessage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Photo
          name="founder-christianah-edem"
          alt={`${site.founder}, ${site.founderRole}, seated at her desk`}
          sizes="(min-width: 1024px) 440px, 100vw"
          className="aspect-[4/4.4] w-full rounded-t-[10rem] rounded-b-3xl object-cover shadow-lg"
        />
        <figure>
          <p className="eyebrow">From our founder</p>
          <blockquote className="mt-5 space-y-4 font-display text-xl leading-relaxed text-navy-900 md:text-2xl md:leading-relaxed">
            <p>
              “We are passionate about building strong foundations for the future by educating and moulding young lives
              with integrity, discipline, excellence and purpose.
            </p>
            <p>
              At The Olivesfield School, every child matters, and we remain dedicated to raising future leaders who will
              positively impact society and the world at large.”
            </p>
          </blockquote>
          <figcaption className="mt-6 border-l-4 border-laurel-400 pl-4">
            <span className="block font-bold text-navy-900">{site.founder}</span>
            <span className="text-muted">{site.founderRole}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
