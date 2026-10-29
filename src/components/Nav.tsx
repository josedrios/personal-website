"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/constants/links";

export default function Nav() {
  return (
    <nav className="nav">
      <Links />
    </nav>
  );
}

function Links() {
  const pathName = usePathname();
  return (
    <ul className="nav__links">
      {links.map((link) => (
        <li className="nav__link-container" key={link.value}>
          <Link
            className={`nav__link ${pathName === link.href ? "nav__link--active" : ""}`}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            download={link.download ?? undefined}
          >
            {link.value.toUpperCase()}
            {link.external && <span className="nav__link-arrow">-&gt;</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
}
