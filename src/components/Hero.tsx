"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Photo, { type PhotoName } from "./Photo";
import { ArrowIcon } from "./Icons";
import { site } from "@/lib/site";

type Slide = {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
  photo: PhotoName;
  alt: string;
};

const slides: Slide[] = [
  {
    eyebrow: `Welcome to ${site.name}`,
    title: (
      <>
        Where excellence, character and <em className="text-olive-700">lifelong learning</em> begin.
      </>
    ),
    text: "At Olivesfield School, every child is empowered with the knowledge, confidence and character needed to become a responsible and successful citizen of tomorrow.",
    primary: { href: "/admissions/", label: "Enquire about admission" },
    secondary: { href: "/about/", label: "Explore our school" },
    photo: "pupils-craft-aprons",
    alt: "Smiling Olivesfield pupils in aprons holding up bead bracelets they have made",
  },
  {
    eyebrow: "Academics",
    title: (
      <>
        Raising <em className="text-olive-700">future leaders</em>
      </>
    ),
    text: "We nurture young minds academically, morally, socially and creatively through quality education and personalised attention.",
    primary: { href: "/academics/", label: "How we teach" },
    secondary: { href: "/about/", label: "Our mission and vision" },
    photo: "pupils-enterprise-display",
    alt: "Pupils in school uniform standing behind a table of products they made",
  },
  {
    eyebrow: "School life",
    title: (
      <>
        Learning that goes <em className="text-olive-700">beyond the classroom</em>
      </>
    ),
    text: "Through excursions, project-based activities, chess classes, book clubs and interactive experiences, our pupils broaden their creativity, confidence and real-world understanding.",
    primary: { href: "/school-life/", label: "Discover school life" },
    secondary: { href: "/gallery/", label: "View the gallery" },
    photo: "cultural-day-dance",
    alt: "Pupils in traditional dress performing a dance during a cultural day celebration",
  },
  {
    eyebrow: "Admissions",
    title: (
      <>
        Become a part of our <em className="text-olive-700">vibrant learning community</em>
      </>
    ),
    text: "Join a nurturing and inspiring environment where children are encouraged to learn, grow, explore and excel.",
    primary: { href: "/admissions/", label: "Start an admission enquiry" },
    secondary: { href: "/contact/", label: "Contact the school" },
    photo: "school-building",
    alt: "Students standing beside the school bus in front of The Olivesfield College building",
  },
];

const INTERVAL = 7000;
const roundBtn =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/25 bg-white text-navy-900 hover:bg-navy-900 hover:text-white";

const motionQuery = "(prefers-reduced-motion: reduce)";
const getReducedMotion = () => window.matchMedia(motionQuery).matches;
const subscribeReducedMotion = (onChange: () => void) => {
  const mq = window.matchMedia(motionQuery);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};

export default function Hero() {
  const [index, setIndex] = useState(0);
  // Autoplay is on by default, except for visitors who ask for reduced motion.
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false);
  const [userPlaying, setPlaying] = useState<boolean | null>(null);
  const playing = userPlaying ?? !reducedMotion;
  const [hold, setHold] = useState(false); // paused while hovered or focused

  const touchX = useRef<number | null>(null);

  const go = (i: number) => setIndex((i + slides.length) % slides.length);

  useEffect(() => {
    if (!playing || hold) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearTimeout(t);
  }, [playing, hold, index]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Welcome to Olivesfield School"
      className="relative overflow-hidden bg-cream-100"
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={() => setHold(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        // Swipe left/right to change slide on touch screens.
        const dx = e.changedTouches[0].clientX - (touchX.current ?? e.changedTouches[0].clientX);
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <div className="container-page py-10 md:py-14 lg:py-16">
        {/* All slides share one grid cell, so the tallest sets the height and nothing shifts. */}
        <div className="grid" aria-live={playing ? "off" : "polite"}>
          {slides.map((s, i) => {
            const active = i === index;
            const Heading = i === 0 ? "h1" : "h2";
            return (
              <div
                key={s.photo}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${slides.length}`}
                aria-hidden={!active}
                inert={!active}
                className={`col-start-1 row-start-1 grid items-center gap-8 transition-opacity duration-700 lg:grid-cols-[1.05fr_1fr] lg:gap-14 ${
                  active ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                <div>
                  <p className="eyebrow">{s.eyebrow}</p>
                  <Heading className="mt-5 text-[2.3rem] font-semibold leading-[1.1] [text-wrap:pretty] sm:text-5xl lg:text-[3.3rem]">
                    {s.title}
                  </Heading>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{s.text}</p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link href={s.primary.href} className="btn btn-accent">
                      {s.primary.label}
                    </Link>
                    <Link href={s.secondary.href} className="btn btn-outline">
                      {s.secondary.label} <ArrowIcon width={18} height={18} />
                    </Link>
                  </div>
                </div>

                <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                  <div aria-hidden className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-laurel-200 lg:-right-10" />
                  <Photo
                    name={s.photo}
                    alt={s.alt}
                    priority={i === 0}
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="relative aspect-[4/3.3] w-full rounded-t-[12rem] rounded-b-3xl object-cover shadow-xl"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-cream-200 pt-6">
          <div className="flex items-center gap-2">
            <button type="button" className={roundBtn} onClick={() => go(index - 1)} aria-label="Previous slide">
              <ArrowIcon width={18} height={18} className="rotate-180" />
            </button>
            <button type="button" className={roundBtn} onClick={() => go(index + 1)} aria-label="Next slide">
              <ArrowIcon width={18} height={18} />
            </button>
            <button
              type="button"
              className={roundBtn}
              onClick={() => setPlaying(!playing)}
              aria-label={playing ? "Pause slideshow" : "Play slideshow"}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                {playing ? <path d="M3 2h3.5v12H3zM9.5 2H13v12H9.5z" /> : <path d="M4 2l10 6-10 6z" />}
              </svg>
            </button>
            <div className="ml-2 flex items-center">
              {slides.map((s, i) => (
                <button
                  key={s.photo}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}: ${s.eyebrow}`}
                  aria-current={i === index}
                  className="group inline-flex h-11 w-7 items-center justify-center"
                >
                  <span
                    className={`block h-2.5 rounded-full transition-all ${
                      i === index ? "w-6 bg-ember-700" : "w-2.5 bg-navy-900/30 group-hover:bg-navy-900/60"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <p className="text-sm font-semibold text-olive-800">
            Founded {site.founded} <span aria-hidden>·</span> Magodo, Lagos
          </p>
        </div>
      </div>
    </section>
  );
}
