import clsx from "clsx";
import React from "react";

export default function Figure({
  children,
  className,
  index = 1,
  hideCaption = false,
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
  hideCaption?: boolean;
}) {
  return (
    <div className={clsx("figure__container", className)}>
      <figure className="figure">{children}</figure>
      {!hideCaption && <p className="figure__caption">FIG. {index}</p>}
    </div>
  );
}
