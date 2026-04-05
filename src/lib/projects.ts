export type ProjectType = {
  title: string;
  date: string;
  description: string;
  skills: string[];
  link: string;
  image: string;
};

// TODO: Clean up data here / update it
export const projects: ProjectType[] = [
  {
    title: "Gamer Cred Website",
    link: "https://github.com/josedrios/gamers-cred",
    skills: ["React.js", "Express.js", "Node.js", "MongoDB", "Sass", "Git"],
    description:
      "This gamer cred website will help players rate games from scores derived from the community. They can also add these gamer cred scores to their own account to accumulate a higher gamer cred score attached to their name. This project is a work in progress.",
    date: "July 2025",
    image: "/images/projects/gamer_cred.webp",
  },
  {
    title: "Silver Minded",
    link: "https://github.com/josedrios/silver-minded",
    skills: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Sass",
      "Git",
      "VS Code",
    ],
    date: "March 2025",
    description:
      "Silver Minded is a desktop application I created in order to place all the wandering thoughts and ideas I had roaming through my head. I find myself spreading all my writings and projects on different pieces of media and platforms as well and I felt like I needed to fix this and centralize all that I need into one piece of software. This application tracks my finances, projects, thoughts and much more. In a nutshell, it contains a calendar for keeping track of events, a finance tracker that also gives me more insight on my spending and saving, and most importantly a network of documents. I can create and index through documents in such a frictionless way that this software serves as the perfect second mind.",
    image: "/images/projects/silver_minded.webp",
  },
  {
    title: "Clashvote",
    link: "https://github.com/josedrios/clashvote",
    skills: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDb",
      "Sass",
      "Git",
      "VS Code",
    ],
    date: "October 2025",
    description:
      "Clashvote is a voting website where users vote on various aspects on the popular mobile game Clash of Clans, helping players of any skill level. Users also have the ability to search for their own player stats, giving them insight on what their strength and weaknesses are as well as providing them a better overview on both their bases and their respective armies.",
    image: "/images/projects/clashvote.webp",
  },
  {
    title: "ReadAI",
    link: "https://github.com/josedrios/AI-Book-Bot",
    skills: ["Swift", "Git", "Xcode"],
    date: "December 2024",
    image: "/images/projects/readai.webp",
    description:
      "With my strong growing interest of reading, I decided to make an app that lets you search for information on a book or get recommendations for books on certain genres utilizing AI. ReadAI takes and displays the information of a given ISBN or a random generated ISBN given a genre and displays rudimentary information on the book but most importantly gives the user an AI generated summarization of the book.",
  },
  {
    title: "Tank Game",
    link: "https://github.com/josedrios/tankgame",
    skills: ["Java", "Git", "IntelliJ"],
    date: "August 2023",
    description:
      "As both a gamer and a programmer, I naturally brought myself to create a game. The game features two Space Tanks, with the ability to shoot, traverse amongst the map, be able to pick up abilities as well as play alongside your friends.",
    image: "/images/projects/tank_game.webp",
  },
  {
    title: "Fashion Database ",
    link: "https://github.com/josedrios/fashion-database-system",
    skills: ["MySQL", "Python", "Git", "IntelliJ"],
    date: "August 2023",
    description:
      "I created a database system with MySQL for the fashion model industry. The process involved laying out the requirements of the system, like what needs to be stored and taken into consideration, creating EER diagrams, implementing it in SQL and even running a dummy discord bot to test and refine the system.",
    image: "/images/projects/fashion_model.webp",
  },
];
