import Link from "next/link";
import Photo from "./Photo";
import { ArrowIcon } from "./Icons";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-100">
      <div className="container-page grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-20">
        <div>
          <p className="eyebrow">Welcome to {site.name}</p>
          <h1 className="mt-5 text-[2.4rem] font-semibold leading-[1.1] [text-wrap:pretty] sm:text-5xl lg:text-[3.3rem]">
            Where excellence, character and <em className="text-olive-700">lifelong learning</em> begin.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            At Olivesfield School, every child is empowered with the knowledge, confidence and character needed to become
            a responsible and successful citizen of tomorrow.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/admissions/" className="btn btn-accent">
              Enquire about admission
            </Link>
            <Link href="/about/" className="btn btn-outline">
              Explore our school <ArrowIcon width={18} height={18} />
            </Link>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-2 gap-6 border-t border-cream-200 pt-6">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wider text-olive-700">Founded</dt>
              <dd className="mt-1 font-display text-2xl text-navy-900">{site.founded}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wider text-olive-700">Location</dt>
              <dd className="mt-1 font-display text-2xl text-navy-900">Magodo, Lagos</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div aria-hidden className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-laurel-200 lg:-right-10" />
          <Photo
            name="pupils-craft-aprons"
            alt="Smiling Olivesfield pupils in aprons holding up bead bracelets they have made"
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="relative aspect-[4/3.4] w-full rounded-t-[12rem] rounded-b-3xl object-cover shadow-xl"
          />
          <div className="absolute -bottom-6 -left-3 w-[44%] overflow-hidden rounded-2xl border-4 border-cream-100 shadow-lg sm:-left-8">
            <Photo
              name="pupils-enterprise-display"
              alt="Pupils in school uniform standing behind a table of products they made"
              priority
              sizes="(min-width: 1024px) 250px, 44vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
