import Header from "@/components/Header";
import Image from "@/components/Image";
import Note from "@/components/Note";

export default function Human() {
  return (
    <main>
      <Header type={1}>Get To Know My Inner Workings</Header>
      <p>
        By inner workings I mean who I am, what I like, etc. Let this page serve
        as a way to tell you more about myself just incase the home page
        wasn&apos;t enough.
      </p>
      <Header type={2}>Character Creation</Header>
      <Image
        src="/images/other/bloodborne_character.webp"
        alt="A bad quality picture of my bloodborne character"
        note="My Bloodborne character"
      />
      <p>
        Just think of a 23 year old Mexican dude with imperfect curly black hair
        and glasses. And a patchy mustache.
      </p>
      <p>
        I am rather introverted but open up rather quick. I think I am a calm
        presence to be around, I may be completely wrong though so don&apos;t
        take my word for it. My everyday goal is that I try to try my best
        everyday.
      </p>
      <Header type={2}>How I Developed an Interest In Coding</Header>
      <p>
        I joined the robotics team in high school. I was part of the assembly
        group for the time I was with them so I never really did much coding but
        it piqued my interest. I ended up going to school for it. I still love
        coding till this day.
      </p>
      <Header type={2}>What I Love</Header>
      <Image
        src="/images/other/zelda.webp"
        alt="A picture of my cousins dog"
        note="This is my cousin's dog, Zelda. Peep the smile."
      />
      <p>The thing I love the most in the world is my family and friends.</p>
      <p>
        Now for the rest of the list, there is a lot. I love to game, with
        friends or solo story mode games, coding stuff that I would like to see
        come to life, playing ping pong, body building, running, going to the
        movies with friends and family, going to a bar with friends, petting
        dogs, reading (depends on the material), soulsborne games, Spiderman,
        Ironman, One Piece, Metal Gear Solid, anything with a vast amount of
        complex lore, COD zombies, labelling stuff with green tape, Satisfactory
        (I&apos;ll stop listing media, I think the list will be too long),
        listening to music while walking around, cracking jokes with my coding
        students, using my glasses after just cleaning them, warm lighting,
        cable management, green tea and belvitas, playing soccer, clothes,
        making my bed in the morning, rain, I&apos;ll put rain twice because I
        really love the rain, Stardew Valley (I know I said I would stop listing
        media but damn SDV is really good), Ratatouille (sorry, I did it again),
        cool vans (vehicles not shoes), dogs just chilling in public, waterfalls
        with secret areas behind them, pizza, Radiohead, Solid Snake, Big Boss,
        In n Out, my parent&apos;s garden, roaming cats, Mexican soccer games,
        astronomy, Jerma (the streamer), Serge Nubret&apos;s physique, Slushy
        Noobz (youtube), the Sun, the Moon, Berserk, Vagabond, and the self-made
        image I have of God in my head (once I delve into religious material,
        the concept of God will be more clear to me).
      </p>
      <Note>
        I certainly left out many things off this list. I will probably come
        back to this from time to time to add stuff.
      </Note>
      <Header type={2}>What I Would Like to Be</Header>
      <Image src="/images/other/ned_stark.webp" alt="Ned Stark aura farming" />
      <p>
        I am trying to become someone who is kind, loving, hardworking, healthy
        and smart. Like my mom and dad. Obviously I can give a more descriptive
        and detailed response but in all honestly it just boils down to that.
      </p>
      <Note>This page was last updated on April 1, 2026</Note>
    </main>
  );
}
