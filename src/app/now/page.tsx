import Header from "@/components/Header";
import Note from "@/components/Note";
import Image from "@/components/Image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description: "What I am doing at this exact moment",
};

export default function Now() {
  return (
    <main>
      <Header type={1}>Right Now, This Very Second</Header>
      <Image
        src="/images/pages/tony_stark_in_cave.webp"
        alt="A picture of Tony Stark working on his first iteration of his Iron Man suit. This is meant to be funny because I am using this image to represent what I am hypothetically, possibly doing right now."
        note="For the record, this image is not of me. It is of movie star Robert Downey Jr."
      />
      <Content />
      <Note>Updated last on June 26, 2026</Note>
    </main>
  );
}

function Content() {
  return (
    <>
      <p>
        Coding. Trying to become a better programmer. Websites. Polishing my
        design token system to have a stronger foundation.{" "}
      </p>
      <p>
        Soccer juggling. I&apos;ve been getting good, I mean I have always been
        good but I&apos;ve been sprucing it up with more tricks.
      </p>
      <p>
        Gaming. Pretty rage inducing. Movies, lots of movies. La La Land might
        be the greatest movie of all time. Still needs to marinate in my head
        though.
      </p>
      <p>
        Perfecting my training. New split. Bench is increasing. Gains are
        looking amazing. Still, more work can be done.
      </p>
      <p>Spending time with my amazing family and friends.</p>
    </>
  );
}
