import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__body">
        <Links />
        {/* TODO: make a quote component */}
        <p>A stone amid the waves -Lorn Au Arcos</p>
      </div>
      <p className="footer__copyright">Copyright © 2025 Jose De Jesus Rios</p>
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
