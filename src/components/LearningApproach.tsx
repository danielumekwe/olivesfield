import { learningApproach } from "@/lib/site";
import { approachIcons } from "./Icons";

// The four teaching emphases published by the school.
export default function LearningApproach() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {learningApproach.map((item, i) => {
        const Icon = approachIcons[item.icon];
        return (
          <li
            key={item.title}
            data-reveal="up"
            style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
            className="rounded-3xl border border-cream-200 bg-white p-7 transition-shadow hover:shadow-lg"
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-olive-100 text-olive-800">
              <Icon width={28} height={28} />
            </span>
            <h3 className="mt-5 text-xl font-semibold leading-snug">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
          </li>
        );
      })}
    </ul>
  );
}
