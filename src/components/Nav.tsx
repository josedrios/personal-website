import Link from "next/link";
import Image from "next/image";

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
  return (
    <div className="nav__logo">
      <Image src="/PNG_0001.png" width={100} height={100} alt="testing" />
      <p>www.josedrios.com</p>
    </div>
  );
}
