// Single source of truth for school facts. Everything here was taken from the
// existing olivesfieldschool.com.ng WordPress site — do not add unverified
// claims (results, awards, fees, class levels) without the school's sign-off.

export const site = {
  name: "The Olivesfield School",
  shortName: "Olivesfield School",
  url: "https://olivesfieldschool.com.ng",
  motto: "Moulding lives to lofty heights",
  tagline: "Shaping Young Minds for Global Impact",
  description:
    "The Olivesfield School in Magodo, Lagos provides a safe, caring and stimulating environment where every child is nurtured academically, morally, socially and creatively.",
  founded: "September 2006",
  founder: "Mrs. Christianah Edem",
  founderRole: "Founder & Head of School",
  email: "info@olivesfieldschool.com.ng",
  phones: [
    { display: "0803 961 4529", tel: "+2348039614529" },
    { display: "0806 051 7038", tel: "+2348060517038" },
  ],
  whatsapp: "2348039614529",
  address: {
    lines: ["Plot 47/48, Block 16, Ayodele Fanoiki Street", "Magodo, Isheri, Lagos 100242"],
    street: "Plot 47/48, Block 16, Ayodele Fanoiki Street, Magodo",
    locality: "Isheri",
    region: "Lagos",
    postalCode: "100242",
    country: "NG",
  },
  // Same search term the previous site's map used.
  mapQuery: "Olivefields Schools, Ayodele Fanoiki Street, Magodo, Lagos",
  social: {
    facebook: "https://www.facebook.com/olivesfield",
    instagram: "https://www.instagram.com/olivefieldsintlschool/",
  },
} as const;

export const nav = [
  { href: "/about/", label: "About" },
  { href: "/academics/", label: "Academics" },
  { href: "/admissions/", label: "Admissions" },
  { href: "/school-life/", label: "School Life" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/contact/", label: "Contact" },
] as const;

export const whatsappUrl = (text = "Hello, I would like to make an enquiry about The Olivesfield School.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapQuery)}`;

export const learningApproach = [
  {
    title: "Montessori Education",
    text: "We practise this method that has been proven to develop the innate qualities in a child.",
    icon: "blocks",
  },
  {
    title: "Computer Education",
    text: "As a pro-tech school, we offer computer education with special focus on practical training.",
    icon: "computer",
  },
  {
    title: "Entrepreneurship & Leadership Studies",
    text: "From a very young age, our pupils are taught the importance of self-employment and self-reliance.",
    icon: "sprout",
  },
  {
    title: "Public Speaking",
    text: "We place so great an emphasis on this skill that we have some days dedicated to pupils’ presentations and discussion forums.",
    icon: "speech",
  },
] as const;

export const activities = [
  "Chess classes",
  "Book clubs",
  "Project-based learning",
  "Excursions",
  "Music training",
  "Sports",
  "Interactive learning programmes",
] as const;

export const facilities = [
  "Modern classrooms",
  "Integrated computer systems",
  "Musical instruments",
  "Well-equipped playgrounds",
  "Sports facilities",
] as const;

/** Open Graph block for a page; keeps the shared image and site name. */
export const pageOpenGraph = (path: string, title: string) => ({
  type: "website" as const,
  siteName: site.name,
  locale: "en_NG",
  url: path,
  title,
  images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "Pupils of The Olivesfield School" }],
});
