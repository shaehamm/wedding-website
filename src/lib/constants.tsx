import React, { useState } from "react";
import Link from "next/link";
import { NavLink } from "./types";

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
