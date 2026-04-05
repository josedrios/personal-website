import NextImage from "next/image";
export default function Image({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  return (
    <NextImage
      width={0}
      height={0}
      sizes="100vw"
      src={src}
      alt={alt}
      className={className}
    />
  );
}
