"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NAV_LINKS } from "../../../lib/constants";
import { Alegreya_Sans_SC } from "next/font/google";

export default function NavbarMobile() {
  const alegreyaSansSC = Alegreya_Sans_SC({
    weight: "300",
    subsets: ["latin"],
  });
  const pathname = usePathname();
  return (
    <div className="md:hidden">
      <div>
        <Link href="/">
          <h2 className={alegreyaSansSC.className}>Shae & Connor</h2>
        </Link>
      </div>
      <div>
        <button></button>
      </div>
    </div>
  );
}
