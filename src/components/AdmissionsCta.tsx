import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function AdmissionsCta() {
  return (
    <section className="bg-navy-900 text-white">
      <div className="container-page grid gap-8 py-14 md:py-20 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div data-reveal="left">
          <p className="eyebrow !text-laurel-200">Admissions</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight !text-white md:text-4xl">
            Become a part of our vibrant learning community
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy-100">
            Join a nurturing and inspiring environment where children are encouraged to learn, grow, explore and excel.
            Our team is always ready to answer your questions and welcome you for a visit.
          </p>
        </div>
        <div className="flex flex-col gap-3" data-reveal="right">
          <Link href="/admissions/" className="btn btn-light">
            Start an admission enquiry
          </Link>
          <a href={`tel:${site.phones[0].tel}`} className="btn border-2 border-white/40 text-white hover:bg-white/10">
            <PhoneIcon width={18} height={18} /> Call {site.phones[0].display}
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border-2 border-white/40 text-white hover:bg-white/10"
          >
            <WhatsAppIcon width={18} height={18} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
