import Image from "next/image";
import type { GalleryImage } from "@/data/projects";

const spanClass: Record<GalleryImage["span"], string> = {
  full: "col-span-6",
  half: "col-span-6 md:col-span-3",
  third: "col-span-6 md:col-span-2",
};

export default function Gallery({
  images,
  aspectClassName = "aspect-[4/3]",
}: {
  images: GalleryImage[];
  aspectClassName?: string;
}) {
  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-6 gap-4 md:gap-6">
      {images.map((image) => {
        const isGif = image.src.toLowerCase().endsWith(".gif");
        return (
          <div key={image.src} className={`relative ${aspectClassName} overflow-hidden bg-surface ${spanClass[image.span]}`}>
            {isGif ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image.src}
                alt={image.alt ?? ""}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <Image
                src={image.src}
                alt={image.alt ?? ""}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
