import Link from "next/link";
import Hero from "@/components/Hero";
import SchoolIntroduction from "@/components/SchoolIntroduction";
import LearningApproach from "@/components/LearningApproach";
import SectionHeading from "@/components/SectionHeading";
import SchoolLife from "@/components/SchoolLife";
import Facilities from "@/components/Facilities";
import FounderMessage from "@/components/FounderMessage";
import AdmissionsCta from "@/components/AdmissionsCta";
import { ArrowIcon } from "@/components/Icons";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SchoolIntroduction />
      <section className="bg-cream-100 py-16 md:py-24">
        <div className="container-page">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Academics"
              title="The best start for your child"
              text="We nurture young minds academically, morally, socially and creatively through quality education and personalised attention."
            />
            <Link href="/academics/" data-reveal="right" className="btn btn-outline shrink-0 self-start lg:self-auto">
              How we teach <ArrowIcon width={18} height={18} />
            </Link>
          </div>
          <div className="mt-10">
            <LearningApproach />
          </div>
        </div>
      </section>
      <SchoolLife />
      <Facilities />
      <FounderMessage />
      <AdmissionsCta />
    </>
  );
}
