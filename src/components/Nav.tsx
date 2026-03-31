"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  return (
    <nav className="nav">
      <p className="nav__header">JOSE D. RIOS</p>
      <div className="nav__body">
        <Logo />
        <Links />
      </div>
    </nav>
  );
}

const links = [
  {
    value: "home",
    href: "/",
  },
  {
    value: "projects",
    href: "/projects",
  },
  {
    value: "blog",
    href: "/",
  },
  {
    value: "now",
    href: "/",
  },
  {
    value: "mind",
    href: "/",
  },
  {
    value: "stuff",
    href: "/",
  },
  {
    value: "body",
    href: "/",
  },
  {
    value: "linkedin",
    href: "/",
  },
  {
    value: "resume",
    href: "/",
  },
  {
    value: "contact",
    href: "/",
  },
  {
    value: "github",
    href: "/",
  },
];
function Links() {
  return (
    <ul className="nav__links">
      {links.map((link) => (
        <li className="nav__link" key={link.value}>
          <Link href={link.href}>{link.value.toUpperCase()}</Link>
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
