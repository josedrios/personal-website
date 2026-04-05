import Header from "@/components/Header";
import Note from "@/components/Note";
import Image from "@/components/Image";

export default function Now() {
  return (
    <main>
      <Header type={1}>Right Now, This Very Second</Header>
      <Image
        src="/images/other/tony_stark_in_cave.webp"
        alt="A picture of Tony Stark working on his first iteration of his Iron Man suit. This is meant to be funny because I am using this image to represent what I am hypothetically, possibly doing right now."
        note="For the record, this image is not of me. It is of movie star Robert Downey Jr."
      />
      <p>
        I&apos;m currently developing my new personal website. In my last one I
        used some AI and the UI is not up to my standards. I plan to completely
        change that with this new website. AI will be used ONLY for assistance
        with dumb questions and nonimportant things. Also the UI will be more my
        tempo. I want to understand my website while making it look nice.
      </p>
      <Note>Updated last on April 1, 2026</Note>
    </main>
  );
}
