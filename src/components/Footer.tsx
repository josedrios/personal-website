"use client";
import Link from "next/link";
import Quote from "./Quote";

export default function Footer() {
  return (
    <footer className="footer">
      <Links />
      <Quote author="Lorn au Arcos">A stone amid the waves</Quote>
      <p className="footer__copyright">Copyright © 2025 Jose De Jesus Rios</p>
    </footer>
  );
}

function Links() {
  return (
    <ul className="footer__links">
      <li>
        <button
          className="scroll-to-top"
          onClick={() =>
            window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
          }
        >
          Back To Top
        </button>
      </li>
      <li>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href={"https://www.linkedin.com/in/josederios/"}
        >
          LinkedIn
        </Link>
      </li>
      <li>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href={"https://github.com/josedrios"}
        >
          Github
        </Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
    </ul>
  );
}
