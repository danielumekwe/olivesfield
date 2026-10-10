"use client";

import { useState } from "react";
import { site, whatsappUrl } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-1.5 block w-full rounded-xl border border-cream-200 bg-white px-4 py-3 text-base text-ink placeholder:text-muted/70 focus:border-navy-700";

export default function ContactForm({ defaultTopic = "General enquiry" }: { defaultTopic?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-3xl border border-olive-600/40 bg-olive-100 p-8">
        <h3 className="text-2xl font-semibold">Thank you — your message has been sent.</h3>
        <p className="mt-3 text-lg text-muted">Our team will get back to you as soon as possible.</p>
        <button type="button" className="btn btn-outline mt-6" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-cream-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-navy-900">
          Full name
          <input name="name" required maxLength={100} autoComplete="name" placeholder="Enter your full name" className={field} />
        </label>
        <label className="block text-sm font-semibold text-navy-900">
          Email address
          <input
            name="email"
            type="email"
            required
            maxLength={150}
            autoComplete="email"
            placeholder="Enter your email address"
            className={field}
          />
        </label>
        <label className="block text-sm font-semibold text-navy-900">
          Phone number <span className="font-normal text-muted">(optional)</span>
          <input name="phone" type="tel" maxLength={30} autoComplete="tel" className={field} />
        </label>
        <label className="block text-sm font-semibold text-navy-900">
          I am enquiring about
          <select name="topic" defaultValue={defaultTopic} className={field}>
            <option>Admission for my child</option>
            <option>Arranging a school visit</option>
            <option>General enquiry</option>
          </select>
        </label>
        <label className="block text-sm font-semibold text-navy-900 sm:col-span-2">
          Message
          <textarea
            name="message"
            required
            rows={5}
            maxLength={4000}
            placeholder="How can we help you?"
            className={field}
          />
        </label>
        {/* Honeypot: hidden from people, tempting for bots. */}
        <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-5 rounded-xl bg-ember-100 p-4 text-[0.95rem] text-navy-900">
          Sorry, we could not send your message just now. Please call{" "}
          <a href={`tel:${site.phones[0].tel}`} className="font-semibold underline">
            {site.phones[0].display}
          </a>
          ,{" "}
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
            message us on WhatsApp
          </a>{" "}
          or email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
          .
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn btn-accent mt-6 w-full disabled:opacity-60 sm:w-auto">
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
