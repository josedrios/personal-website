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
    value: "resume",
    href: "/files/Resume.pdf",
    download: true,
  },
];
