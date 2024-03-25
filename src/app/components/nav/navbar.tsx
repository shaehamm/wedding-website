"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NAV_LINKS } from "../../../lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="justify-evenly items-center hidden md:flex">
      {NAV_LINKS.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "font-medium hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-clip-text hover:text-transparent",
              {
                underline: pathname === link.href,
              }
            )}
          >
            <p className="block">{link.name}</p>
          </Link>
        );
      })}
    </nav>
  );
}
