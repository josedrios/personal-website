import clsx from "clsx";
import React from "react";

// TODO: accept different sizes
export default function Icon({
  icon,
  className,
  height,
}: {
  icon: React.ReactNode;
  className?: string;
  height?: number;
}) {
  return (
    <div
      style={{ height: height ?? "fit-content" }}
      className={clsx("icon__container", className)}
    >
      {icon}
    </div>
  );
}
