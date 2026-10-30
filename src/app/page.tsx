import Header from "@/components/Header";
import Link from "next/link";
import Post from "@/components/WritingCard";
import { getSortedPostsData } from "@/lib/writings";
import FadeIn from "@/components/FadeIn";
import { Navigation } from "lucide-react";
import Icon from "@/components/Icon";

export default function Home() {
  return (
    <FadeIn main>
      <Heading />
      <Writings />
    </FadeIn>
  );
}

export function Heading() {
  return (
    <div className="home__heading">
      <div className="home__heading-content">
        <div className="home__top-row">
          <Icon icon={<Navigation />} height={45}></Icon>
          <div className="home__identity">
            <Header type={1} className="home__name">
              Jose D. Rios
            </Header>
            <p className="home__alias">HUMAN FROM EARTH</p>
          </div>
        </div>
        <p className="home__heading-paragraph">
          I am a rather simple <b>organism</b>. You would typically find me
          slapping my keyboard <b>programming</b> because I find it fun and it
          stimulates the mind. I also love gaming and physicaly training. My
          time is best spent with my <b>friends</b> and <b>family</b>.
        </p>
        <p className="home__heading-paragraph">
          If you feel like learning more about me feel free to gaze upon my{" "}
          <Link
            href="https://github.com/josedrios"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>{" "}
          or{" "}
          <Link
            href="https://www.linkedin.com/in/josederios/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          . You can also email me directly at{" "}
          <Link href={"mailto:josederios@outlook.com"}>
            josederios@outlook.com
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

function Writings() {
  const writings = getSortedPostsData();

  return (
    <>
      <Header type={2}>Writings</Header>
      <div className="writing-cards__container">
        {writings.map((post) => (
          <Post
            href={`/writings/${post.slug}`}
            title={post.title}
            created={post.created}
            key={post.slug}
          />
          // TODO: add view more (adding 5 more at a time)
        ))}
      </div>
    </>
  );
}
