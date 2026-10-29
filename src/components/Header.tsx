"use client";

type HeaderProps = {
  type?: number;
  className?: string;
  children: string;
};

export default function Header({
  type = 1,
  className = "",
  children: text,
}: HeaderProps) {
  if (type === 1) {
    return (
      <h1 className={className}>
        {text}
      </h1>
    );
  } else if (type === 2) {
    return (
      <h2 className={className}>
        {text}
      </h2>
    );
  } else if (type === 3) {
    return (
      <h3 className={className}>
        {text}
      </h3>
    );
  } else {
    return;
  }
}
