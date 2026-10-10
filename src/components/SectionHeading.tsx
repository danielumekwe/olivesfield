type Props = { eyebrow: string; title: string; text?: string; center?: boolean; light?: boolean };

export default function SectionHeading({ eyebrow, title, text, center, light }: Props) {
  return (
    <div data-reveal="up" className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${light ? "!text-laurel-200" : ""}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-semibold leading-tight md:text-4xl ${light ? "!text-white" : ""}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-navy-100" : "text-muted"}`}>{text}</p>}
    </div>
  );
}
