"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Nav() {
  return (
    <nav className="nav">
      <Links />
      <Logo />
    </nav>
  );
}

function Links() {
  const links = [
    {
      value: "home",
      href: "/",
    },
    {
      value: "projects",
      href: "/",
    },
    {
      value: "blog",
      href: "/",
    },
    {
      value: "mind",
      href: "/",
    },
    {
      value: "body",
      href: "/",
    },
    {
      value: "material",
      href: "/",
    },
    {
      value: "github",
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
  ];

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
  const [imageIndex, setImageIndex] = useState<number>(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => {
        if (prev === 5) {
          return 1;
        } else {
          return prev + 1;
        }
      });
    }, 250);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="nav__logo">
      <Image
        src={`/PNG_000${imageIndex}.png`}
        width={100}
        height={100}
        alt="testing"
      />
      <p className="nav__logo-text">JOSE D. RIOS</p>
    </div>
  );
}
