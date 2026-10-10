import manifest from "@/data/images.json";

export type PhotoName = keyof typeof manifest;

type Props = {
  name: PhotoName;
  alt: string;
  /** CSS `sizes` hint so the browser picks the smallest adequate file. */
  sizes?: string;
  className?: string;
  priority?: boolean;
};

// Responsive WebP image built from the pre-generated files in /public/images
// (see scripts/optimize-images.sh). Width/height are set to avoid layout shift.
export default function Photo({ name, alt, sizes = "100vw", className, priority }: Props) {
  const { w, h, widths } = manifest[name];
  const largest = widths[widths.length - 1];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/${name}-${largest}.webp`}
      srcSet={widths.map((x) => `/images/${name}-${x}.webp ${x}w`).join(", ")}
      sizes={sizes}
      width={w}
      height={h}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={className}
    />
  );
}
