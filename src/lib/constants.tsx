import React, { useState } from "react";
import Link from "next/link";
import { NavLink } from "./types";
import { DayOfSchedule } from "./types";

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
