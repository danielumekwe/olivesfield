import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import GalleryGrid, { type GalleryItem } from "@/components/GalleryGrid";
import AdmissionsCta from "@/components/AdmissionsCta";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs and video from The Olivesfield School, Magodo, Lagos: classrooms, sports days, cultural celebrations, practical lessons and everyday school life.",
  alternates: { canonical: "/gallery/" },
  openGraph: pageOpenGraph("/gallery/", "Gallery | The Olivesfield School"),
};

const items: GalleryItem[] = [
  { name: "independence-day-pupils", alt: "Smiling pupils in traditional dress waving Nigerian flags on Independence Day" },
  { name: "back-to-school-boys", alt: "Three pupils in uniform holding back-to-school signs" },
  { name: "school-building-staff", alt: "Staff lined up in front of the green and orange school building" },
  { name: "independence-day-girl", alt: "A pupil in a white dress and green headwrap holding a Nigerian flag" },
  { name: "graduation-dance", alt: "Pupils in pink ballet costumes performing on stage at a graduation ceremony" },
  { name: "back-to-school-girls", alt: "Three pupils with school bags holding first-day-of-term signs" },
  { name: "college-girls-blazers", alt: "College students in navy blazers and pink ties posing beside the school building" },
  { name: "yellow-day-handprints", alt: "Young pupils holding out hands covered in yellow paint" },
  { name: "cultural-attire-students", alt: "Students in traditional attire and coral beads in the school grounds" },
  { name: "graduation-pupils-sashes", alt: "Young graduates in blue outfits, pink sashes and tiaras" },
  { name: "staff-team", alt: "Teachers and staff smiling and posing together on the school lawn" },
  { name: "girl-child-day-pupil", alt: "A smiling pupil holding a pink flower on the International Day of the Girl Child" },
  { name: "independence-day-flags", alt: "Three pupils in traditional dress holding Nigerian flags" },
  { name: "back-to-school-pupil", alt: "A young pupil in uniform holding a 'Ready to Shine' sign" },
  { name: "yellow-day-group", alt: "Young pupils dressed in yellow posing together on Yellow Day" },
  { name: "graduation-class", alt: "Young graduates and teachers on stage at the Class of 2026 graduation" },
  { name: "independence-day-students", alt: "Students in green traditional outfits holding Nigerian flags" },
  { name: "blue-day-colouring", alt: "A smiling young pupil colouring in a worksheet on Blue Day" },
  { name: "girl-child-day-assembly", alt: "Pupils in party hats gathered in front of a colourful mural" },
  { name: "back-to-school-college", alt: "Three college students with back-to-school signs in front of the college building" },
  { name: "red-day-friends", alt: "Two young pupils in red dresses hugging on Red Day" },
  { name: "graduation-pupils-hall", alt: "Students in navy blazers seated in the hall at a graduation ceremony" },
  { name: "independence-traditional-group", alt: "Pupils in traditional attire from across Nigeria on Independence Day" },
  { name: "yellow-day-painting", alt: "Young pupils around a table with plates of paint on Yellow Day" },
  { name: "back-to-school-smile", alt: "A smiling pupil holding a sign that reads 'Ready to share, play and learn together again'" },
  { name: "teachers-day-staff", alt: "Staff in matching black T-shirts celebrating World Teachers' Day" },
  { name: "graduation-caps", alt: "Graduating students in maroon blazers tossing their caps in the air" },
  { name: "pupils-craft-aprons", alt: "Pupils in aprons holding up bead bracelets they have made" },
  { name: "cultural-day-attire", alt: "A pupil in traditional attire and coral beads on cultural day" },
  { name: "pupils-enterprise-display", alt: "Pupils standing behind a table of products they made" },
  { name: "school-building", alt: "Students beside the school bus in front of The Olivesfield College building" },
  { name: "cultural-day-dance", alt: "Pupils in traditional dress performing a cultural dance" },
  { name: "student-election", alt: "Students casting votes in a ballot box on the school field" },
  { name: "science-practical-group", alt: "Students gathered around a bench during a science practical" },
  { name: "students-market-stall", alt: "Students at a stall with drinks and snacks they prepared" },
  { name: "crown-celebration", alt: "A young pupil wearing a paper crown during a school celebration" },
  { name: "sports-day-games", alt: "Pupils taking part in games on the field at sports day" },
  { name: "nursery-classroom", alt: "Young children at a table in a brightly decorated classroom" },
  { name: "college-students", alt: "Two students in navy blazers smiling in the school grounds" },
  { name: "sports-day-race", alt: "Pupils running a race on a grass track at sports day" },
  { name: "pupils-sandal-making", alt: "Pupils showing sandals made in a practical skills session" },
  { name: "sports-day-carnival", alt: "A participant in a red feathered carnival costume at sports day" },
  { name: "science-practical-bench", alt: "Students in white coats working at a bench in a science practical" },
  { name: "sports-school-field", alt: "Pupils racing across the school field as classmates watch" },
  { name: "students-food-enterprise", alt: "Students behind packaged food products they prepared" },
  { name: "pupils-camouflage-day", alt: "Young pupils dressed in camouflage outfits sitting together on the grass" },
  { name: "creche-room", alt: "A bright room with small beds, soft toys and play mats" },
  { name: "sports-day-field", alt: "Children and teachers on the field during sports day activities" },
  { name: "party-play", alt: "Children playing together on an inflatable at a school party" },
  { name: "sports-day-guests", alt: "Guests and officials gathered at a school sports day" },
  { name: "party-inflatables", alt: "Children enjoying inflatable play equipment at a school party" },
  { name: "celebration-parents", alt: "Parents and guests seated at tables during a school celebration" },
  { name: "party-bouncy-castle", alt: "Children jumping on a bouncy castle at a school party" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A look inside life at Olivesfield"
        intro="Moments from our classrooms, celebrations, sports days and practical lessons."
      />

      <section className="py-14 md:py-20">
        <div className="container-page">
          <figure className="mx-auto mb-14 max-w-3xl">
            <video
              controls
              preload="none"
              playsInline
              poster="/images/og-default.jpg"
              className="w-full rounded-3xl bg-navy-950 shadow-lg"
              aria-label="Video from The Olivesfield School"
            >
              <source src="/media/olivesfield-school.mp4" type="video/mp4" />
              <a href="/media/olivesfield-school.mp4">Download the school video (MP4)</a>
            </video>
            <figcaption className="mt-3 text-center text-muted">A short video from the school.</figcaption>
          </figure>
          <GalleryGrid items={items} />
        </div>
      </section>

      <AdmissionsCta />
    </>
  );
}
