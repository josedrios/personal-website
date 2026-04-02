import Header from "@/components/Header";
import Note from "@/components/Note";

export default function Now() {
  return (
    <main>
      <Header type={1}>Right Now, This Very Second</Header>
      <p>
        I&apos;m currently developing my new personal website. In my last one I
        used some AI and the UI is not up to my standards. I plan to completely
        change that with this new website. No AI. New UI. I want to understand
        my website while making it look nice.
      </p>
      <Note>Updated last on April 1, 2026</Note>
    </main>
  );
}
