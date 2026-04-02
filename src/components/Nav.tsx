"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav() {
  return (
    <nav className="nav">
      <Link href={"/"} className="nav__header">
        JOSE D. RIOS
      </Link>
      <div className="nav__body">
        <Logo />
        <Links />
      </div>
    </nav>
  );
}

type LinkType = {
  value: string;
  href: string;
  external?: boolean;
  download?: boolean;
};

const links: LinkType[] = [
  {
    value: "home",
    href: "/",
  },
  {
    value: "github",
    href: "https://github.com/josedrios",
    external: true,
  },
  {
    value: "blog",
    href: "/blog",
  },
  {
    value: "linkedin",
    href: "https://www.linkedin.com/in/josederios/",
    external: true,
  },
  {
    value: "projects",
    href: "/projects",
  },
  {
    value: "movies",
    href: "https://letterboxd.com/Toro404/",
    external: true,
  },
  {
    value: "now",
    href: "/now",
  },
  {
    value: "books",
    href: "https://www.goodreads.com/user/show/194052960-big-chungus",
    external: true,
  },
  {
    value: "human",
    href: "/human",
  },
  {
    value: "resume",
    href: "/files/Resume.pdf",
    download: true,
  },
  {
    value: "contact",
    href: "/contact",
  },
];
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

function Logo() {
  const [digits, setDigits] = useState<string[]>([...Array(2000).fill(0)]);

  useEffect(() => {
    const digitRandomizer = setInterval(() => {
      const temp = [
        ...Array(8).fill("J"),
        ...Array(250).fill(0),
        ...Array(250).fill(1),
      ];

      // fisher yates shuffle thingy, whats a man got to do to get a simple shuffle func
      for (let i = temp.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [temp[i], temp[j]] = [temp[j], temp[i]];
      }
      setDigits(temp);
    }, 750);
    return () => clearInterval(digitRandomizer);
  }, []);

  return (
    <div className="nav__binary-container">
      <p className="nav__binary">
        {digits.map((digit, i) => (
          <span
            className={`${digit === "J" ? "binary-j" : ""} binary-digit`}
            key={i}
          >
            {digit}
          </span>
        ))}
      </p>
    </div>
  );
}
