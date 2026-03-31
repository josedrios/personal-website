import Link from "next/link";
import Quote from "./Quote";

export default function Footer() {
  return (
    <footer className="footer">
      <Links />
      <p className="footer__copyright">Copyright © 2025 Jose De Jesus Rios</p>
      <Quote>A stone amid the waves -Lorn au Arcos</Quote>
    </footer>
  );
}

function Links() {
  return (
    <ul className="footer__links">
      <li>
        <Link href={"/"}>Back To Top</Link>
      </li>
      <li>
        <Link href={"/"}>LinkedIn</Link>
      </li>
      <li>
        <Link href={"/"}>Github</Link>
      </li>
    </ul>
  );
}
