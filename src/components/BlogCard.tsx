import { convertDate } from "@/util/dateConverter";
import Link from "next/link";

export default function BlogCard({
  title,
  info,
  date,
  href,
}: {
  title: string;
  info: string;
  date: string;
  href: string;
}) {
  return (
    <Link className="blog-card" href={href}>
      <h2 className="blog-card__title">{title}</h2>
      <p className="blog-card__info">{info}</p>
      <p className="blog-card__date">{convertDate(date)}</p>
    </Link>
  );
}
