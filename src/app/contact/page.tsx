import Header from "@/components/Header";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Converse with me",
};

export default function Contact() {
  return (
    <main>
      <Header type={1}>Send Me a Pigeon</Header>
      <p>
        If you can send me a pigeon please do. If you can&apos;t I guess you can
        shoot me an email. If I find out that you had the ability to send a
        pigeon and you decided to send an email instead, our relationship will
        be severed.
      </p>
      <p>
        {/* TODO: make clicking on the email mailto */}
        <Link href={"mailto:josederios@outlook.com"}>
          josederios@outlook.com
        </Link>
      </p>
    </main>
  );
}
