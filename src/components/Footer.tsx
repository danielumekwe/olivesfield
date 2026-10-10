import Link from "next/link";
import { nav, site, directionsUrl } from "@/lib/site";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-xl bg-white p-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo.png" alt="" width={240} height={172} className="h-12 w-auto" loading="lazy" />
            </span>
            <span className="font-display text-xl font-semibold text-white">{site.name}</span>
          </div>
          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed">
            We are committed to building confident, creative and well-rounded learners through quality education, strong
            values and engaging learning experiences.
          </p>
          <p className="mt-4 font-display italic text-laurel-200">{site.motto}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Olivesfield School on Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 hover:bg-white hover:text-navy-900"
            >
              <FacebookIcon width={20} height={20} />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Olivesfield School on Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 hover:bg-white hover:text-navy-900"
            >
              <InstagramIcon width={20} height={20} />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-sans text-sm font-bold uppercase tracking-widest !text-white">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 md:grid-cols-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-sm font-bold uppercase tracking-widest !text-white">Visit or contact us</h2>
          <ul className="mt-4 space-y-4 text-[0.95rem]">
            <li className="flex gap-3">
              <PinIcon className="mt-0.5 shrink-0 text-laurel-400" width={20} height={20} />
              <address className="not-italic">
                {site.address.lines[0]}
                <br />
                {site.address.lines[1]}
                <br />
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                  Get directions
                </a>
              </address>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 shrink-0 text-laurel-400" width={20} height={20} />
              <span>
                {site.phones.map((p, i) => (
                  <span key={p.tel}>
                    {i > 0 && ", "}
                    <a href={`tel:${p.tel}`} className="hover:text-white hover:underline">
                      {p.display}
                    </a>
                  </span>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <MailIcon className="mt-0.5 shrink-0 text-laurel-400" width={20} height={20} />
              <a href={`mailto:${site.email}`} className="break-all hover:text-white hover:underline">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-sm text-navy-100/80 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Designed by Web365 Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
