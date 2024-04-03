import { StaticImageData } from "next/image";

export type NavLink = {
  name: string;
  href: string;
};

const dinner_options = ["chicken", "fish"] as const;

export type DayOfSchedule = {
  time: string;
  title: string;
  description: string;
};

export type QuestionsAndAnswers = {
  question: string;
  answer: string;
};

export type Memories = {
  date: string;
  description: string;
  photo: StaticImageData | null;
};
