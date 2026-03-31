import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header type={1}>It Is I.</Header>
      <p>
        <i>insert image of me here????</i>
      </p>
      <Header type={2}>Who?</Header>
      <p>
        I am Jose De Jesus Rios. I am a human who enjoys spending time with
        loved ones, creating things through code, physical training, and
        consuming media that knock my socks off.
      </p>
      <Header type={2}>Why?</Header>
      <p>
        Because it makes sense. It makes sense to love, create and consume the
        things I have chose in my life. It doesn&apos;t feel so great all the
        time but even when it doesn&apos;t feel great, it feels right.
      </p>
      <Header type={2}>How?</Header>
      <p>
        Because my parents decided they wanted another kid. As for how my
        personality and interests came about, they just happened to stick. After
        years of navigating my way through this planet and the society that it
        contains, there were certain ideas and feelings and experiences that
        made me realize that life should be spent on these things, guilt free.
      </p>
      <Header type={2}>Apology Letter</Header>
      <p>
        I would like to apologize for the big heaping pile of garbage you just
        read above. These are just the words that made the most sense when it
        came to the time to write this portion of the website. I would like to
        apologize for the blabberfest I had, and will continue to have because I
        know for a fact that my <Link href={"/blog"}>blogs</Link> are 100%
        exactly the same.
      </p>
    </main>
  );
}
