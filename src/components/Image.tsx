import NextImage from "next/image";
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
  return (
    <>
      <div className="image-container">
        <NextImage
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
