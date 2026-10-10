"use client";

import { useRef, useState } from "react";
import Photo, { type PhotoName } from "./Photo";

export type GalleryItem = { name: PhotoName; alt: string };

// Photo grid with a keyboard-accessible lightbox built on the native <dialog>.
export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const current = items[index];

  const open = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const step = (d: number) => setIndex((i) => (i + d + items.length) % items.length);

  return (
    <>
      <ul className="columns-2 gap-4 md:columns-3 [&>li]:mb-4">
        {items.map((item, i) => (
          <li key={item.name} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => open(i)}
              className="group block w-full overflow-hidden rounded-2xl"
              aria-label={`View larger: ${item.alt}`}
            >
              <Photo
                name={item.name}
                alt={item.alt}
                sizes="(min-width: 768px) 33vw, 50vw"
                className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        aria-label="Photo viewer"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
        className="m-auto max-h-[94dvh] w-[min(94vw,64rem)] rounded-2xl bg-navy-950 p-3 text-white backdrop:bg-navy-950/85"
      >
        <Photo key={current.name} name={current.name} alt={current.alt} sizes="94vw" className="mx-auto max-h-[76dvh] w-auto rounded-xl object-contain" priority />
        <p className="px-2 pt-3 text-center text-[0.95rem] text-navy-100">{current.alt}</p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <button type="button" onClick={() => step(-1)} className="btn border border-white/40 !min-h-11 !px-4 !py-2 text-white hover:bg-white/10">
            Previous
          </button>
          <span className="whitespace-nowrap text-sm text-navy-100">
            {index + 1} of {items.length}
          </span>
          <div className="flex gap-2">
            <button type="button" onClick={() => step(1)} className="btn border border-white/40 !min-h-11 !px-4 !py-2 text-white hover:bg-white/10">
              Next
            </button>
            <button type="button" onClick={() => dialog.current?.close()} className="btn btn-light !min-h-11 !px-4 !py-2">
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
