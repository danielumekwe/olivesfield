import Photo, { type PhotoName } from "./Photo";

type Props = { eyebrow: string; title: string; intro?: string; photo?: PhotoName; photoAlt?: string };

// Inner-page banner: text on cream with an optional photograph alongside.
export default function PageHeader({ eyebrow, title, intro, photo, photoAlt = "" }: Props) {
  return (
    <section className="border-b border-cream-200 bg-cream-100">
      <div className="container-page grid items-center gap-8 py-12 md:py-16 lg:grid-cols-[1.1fr_1fr]">
        <div data-reveal="left">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
          {intro && <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{intro}</p>}
        </div>
        {photo && (
          <Photo
            name={photo}
            alt={photoAlt}
            priority
            reveal="right"
            sizes="(min-width: 1024px) 560px, 100vw"
            className="aspect-[16/10] w-full rounded-3xl object-cover shadow-lg"
          />
        )}
      </div>
    </section>
  );
}
