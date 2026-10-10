import { directionsUrl, site, whatsappUrl } from "@/lib/site";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";

const iconWrap = "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-olive-100 text-olive-800";

export default function ContactDetails() {
  return (
    <ul className="space-y-6">
      <li className="flex gap-4">
        <span className={iconWrap}>
          <PinIcon />
        </span>
        <div>
          <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-olive-700">Visit us</h3>
          <address className="mt-1 text-lg not-italic leading-relaxed text-navy-900">
            {site.address.lines[0]}
            <br />
            {site.address.lines[1]}
          </address>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block font-semibold text-ember-700 underline underline-offset-4"
          >
            Get directions
          </a>
        </div>
      </li>
      <li className="flex gap-4">
        <span className={iconWrap}>
          <PhoneIcon />
        </span>
        <div>
          <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-olive-700">Call us</h3>
          <p className="mt-1 text-lg text-navy-900">
            {site.phones.map((p, i) => (
              <span key={p.tel}>
                {i > 0 && <span aria-hidden> · </span>}
                <a href={`tel:${p.tel}`} className="hover:underline">
                  {p.display}
                </a>
              </span>
            ))}
          </p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className={iconWrap}>
          <WhatsAppIcon />
        </span>
        <div>
          <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-olive-700">WhatsApp</h3>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-lg text-navy-900 hover:underline"
          >
            Message us on {site.phones[0].display}
          </a>
        </div>
      </li>
      <li className="flex gap-4">
        <span className={iconWrap}>
          <MailIcon />
        </span>
        <div>
          <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-olive-700">Email</h3>
          <a href={`mailto:${site.email}`} className="mt-1 inline-block break-all text-lg text-navy-900 hover:underline">
            {site.email}
          </a>
        </div>
      </li>
    </ul>
  );
}
