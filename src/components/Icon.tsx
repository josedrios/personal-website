import clsx from "clsx";
import React from "react";

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
