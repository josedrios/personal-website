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
      <p>
        I currently just finished reading a python textbook to spruce up my
        python. Why? Because I want to learn data structures and algorithms.
        Why? Certainly not because it will bring up my chances of getting hired
        as a software engineer in this time of AI. Those chances are already
        close to 0 if not 0. It is because I want to become a better programmer.
      </p>
      <p>
        My urge to code and learn more on how to become a better programmer has
        significantly risen because of this shift of focus. I am satisfied right
        now with my current jobs and how life is going. My goal is not to become
        a man in the field but a man who can build. This sounds like a whole
        bunch of copium but I truly feel this way right now. The more I learn
        the more I see how much code is just a huge sandbox. Maybe in the future
        I will get a job in the field, who knows. But right now, I want to
        become someone with great coding capabilities. Maybe build something
        society can use.
      </p>
      <p>
        Summary: Going to learn DSA and learn other general coding stuff. Make
        stuff too. Maybe drink water and sleep here and there. If you are
        reading this take some time to dissect what you are doing at this time
        of your life and what you would want to be doing. A little funtivity.
      </p>
      <Note>Updated last on May 7, 2026</Note>
    </main>
  );
}
