"use client";
import NextImage from "next/image";
import { useState } from "react";
export default function Image({
  src,
  alt,
  className,
  note,
}: {
  src: string;
  alt: string;
  className?: string;
  note?: string;
}) {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <>
      <div className="image-container">
        {!loaded && <div className="image-skeleton">loading image...</div>}
        <NextImage
          data-loaded={loaded}
          onLoad={() => setLoaded(true)}
          width={0}
          height={0}
          sizes="100vw"
          src={src}
          alt={alt}
          className={`image ${className ?? ""}`}
        />
      </div>
      {note && <p className="image-note">{note}</p>}
    </>
  );
}
