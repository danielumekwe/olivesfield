// Cloudflare Worker entry. Static pages are served from ./out by the ASSETS
// binding; this script only handles the contact/enquiry form at /api/contact.
//
// Email is sent through the Resend HTTPS API. Set the secret with:
//   npx wrangler secret put RESEND_API_KEY
// CONTACT_TO / CONTACT_FROM are plain vars in wrangler.jsonc.

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  RESEND_API_KEY?: string;
  CONTACT_TO: string;
  CONTACT_FROM: string;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const TOPICS = ["Admission for my child", "Arranging a school visit", "General enquiry"];

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405);

  // Only accept submissions made from the site itself.
  const origin = request.headers.get("Origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) return json({ error: "forbidden" }, 403);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  // Honeypot field: real visitors never fill it in. Pretend success to bots.
  if (clean(body.website, 200)) return json({ ok: true });

  const name = clean(body.name, 100);
  const email = clean(body.email, 150);
  const phone = clean(body.phone, 30);
  const message = clean(body.message, 4000);
  const topic = TOPICS.includes(clean(body.topic, 60)) ? clean(body.topic, 60) : "General enquiry";

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\r\n]/.test(name + email)) {
    return json({ error: "invalid_fields" }, 422);
  }

  if (!env.RESEND_API_KEY) {
    console.error("Contact form: RESEND_API_KEY is not configured");
    return json({ error: "not_configured" }, 503);
  }

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Enquiry", topic],
  ];
  const html =
    `<h2>New website enquiry</h2><table cellpadding="6">` +
    rows.map(([k, v]) => `<tr><th align="left">${k}</th><td>${escapeHtml(v)}</td></tr>`).join("") +
    `</table><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\n${message}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: [env.CONTACT_TO],
      reply_to: email,
      subject: `Website enquiry: ${topic} — ${name}`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Contact form: mail API error", res.status, await res.text());
    return json({ error: "send_failed" }, 502);
  }
  return json({ ok: true });
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === "/api/contact" || pathname === "/api/contact/") return handleContact(request, env);
    return env.ASSETS.fetch(request);
  },
};

export default worker;
