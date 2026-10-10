import type { SVGProps } from "react";

const base = (props: SVGProps<SVGSVGElement>) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const PhoneIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);
export const MailIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
export const PinIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
export const ArrowIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const CheckIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="m5 12.5 4.5 4.500L19 7.5" />
  </svg>
);
export const WhatsAppIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M4 20l1.3-4.200A8 8 0 1 1 8.3 19L4 20Z" />
    <path d="M9 9.500c0 3 2.5 5.5 5.5 5.500l1-1.5-2-1-.8.800a3.5 3.5 0 0 1-2-2l.8-.800-1-2L9 9.500Z" />
  </svg>
);
export const FacebookIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8Z" />
  </svg>
);
export const InstagramIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="0.6" fill="currentColor" />
  </svg>
);
export const BlocksIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="3" y="12" width="8" height="8" rx="1.5" />
    <rect x="13" y="12" width="8" height="8" rx="1.5" />
    <rect x="8" y="3" width="8" height="8" rx="1.5" />
  </svg>
);
export const ComputerIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M8 20h8M12 16v4" />
  </svg>
);
export const SproutIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 21v-9" />
    <path d="M12 12c0-4-3-6-7-6 0 4 3 6 7 6Z" />
    <path d="M12 15c0-3.5 2.5-5.5 7-5.5 0 3.5-2.5 5.5-7 5.500Z" />
  </svg>
);
export const SpeechIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M4 5h16v11H10l-5 4v-4H4V5Z" />
    <path d="M8 9h8M8 12h5" />
  </svg>
);

export const approachIcons = {
  blocks: BlocksIcon,
  computer: ComputerIcon,
  sprout: SproutIcon,
  speech: SpeechIcon,
} as const;
