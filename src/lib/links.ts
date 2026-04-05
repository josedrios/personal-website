export type LinkType = {
  value: string;
  href: string;
  external?: boolean;
  download?: boolean;
};

export const links: LinkType[] = [
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
