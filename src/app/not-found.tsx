import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page py-24 text-center md:py-32">
      <p className="eyebrow">Page not found</p>
      <h1 className="mt-4 text-4xl font-semibold md:text-5xl">We could not find that page</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
        The page may have moved when we redesigned our website. Try the links below.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Go to the homepage
        </Link>
        <Link href="/contact/" className="btn btn-outline">
          Contact the school
        </Link>
      </div>
    </section>
  );
}
