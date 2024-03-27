import React, { useState } from "react";
import Link from "next/link";
import { NavLink } from "./types";
import { DayOfSchedule } from "./types";
import { QuestionsAndAnswers } from "./types";

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/our-story" },
  { name: "Wedding Party", href: "/wedding-party" },
  { name: "Photos", href: "/photos" },
  { name: "Travel", href: "/travel-info" },
  { name: "Q + A", href: "/q+a" },
  { name: "Registry", href: "/registry" },
  { name: "RSVP", href: "/rsvp" },
];

export const DAY_OF_SCHEDULE: DayOfSchedule[] = [
  {
    time: "2:30pm",
    title: "CEREMONY",
    description: "Make your way to the ceremony and grab a blanket",
  },
  {
    time: "3:00pm",
    title: "COCKTAIL HOUR",
    description: "Head inside and enjoy yourself",
  },
  {
    time: "5:00pm",
    title: "DINNER",
    description: "Find your seat and dine with us",
  },
];

export const Q_AND_A: QuestionsAndAnswers[] = [
  {
    question: "Where is the ceremony and reception being held?",
    answer:
      "The ceremony and reception will both be held at Della Terra Mountain Chateau.",
  },
  { question: "Why Colorado?", answer: "" },
  { question: "What is the dress code?", answer: "" },
  {
    question: "Is there parking onsite?",
    answer:
      "Parking is available on site. There will be people to guide you to a spot and they will also shuttle you up to the ceremony location.",
  },
  { question: "Can I bring my children?", answer: "" },
  { question: "What time do I need to be at the ceremony?", answer: "" },
  {
    question: "How do I contact you for additional questions?",
    answer: "",
  },
  { question: "When do I need to RSVP by?", answer: "" },
  { question: "Can I take pictures during the ceremony?", answer: "" },
  { question: "Do you have hotel rooms blocked for guests?", answer: "" },
  { question: "Will the wedding be outdoors at all?", answer: "" },
  {
    question: "Will transportation to and from the venue be provided?",
    answer: "",
  },
  { question: "Will there be an open bar?", answer: "" },
  { question: "Is there any other info I should know?", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
];
