import { convertDate } from "@/util/dateConverter";
import Link from "next/link";

export default function WritingCard({
  title,
  created,
  href,
}: {
  title: string;
  created: string;
  href: string;
}) {
  return (
    <Link className="writing-card" href={href}>
      <h2 className="writing-card__title">{title}</h2>
      <p className="writing-card__date">{convertDate(created)}</p>
    </Link>
  );
}
