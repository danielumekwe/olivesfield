import type { Metadata, Viewport } from "next";
import { Fraunces, Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const display = Fraunces({ variable: "--font-display", subsets: ["latin"], display: "swap" });
const body = Figtree({ variable: "--font-body", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_NG",
    url: "/",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "Pupils of The Olivesfield School" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#16224d" };

const schoolJsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: site.name,
  alternateName: "Olivesfield Schools",
  url: site.url,
  logo: `${site.url}/images/logo.png`,
  image: `${site.url}/images/og-default.jpg`,
  slogan: site.motto,
  description: site.description,
  foundingDate: "2006-09",
  founder: { "@type": "Person", name: "Christianah Edem" },
  email: site.email,
  telephone: site.phones.map((p) => p.tel),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  sameAs: [site.social.facebook, site.social.instagram],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-NG" className={`${display.variable} ${body.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolJsonLd) }} />
      </body>
    </html>
  );
}
