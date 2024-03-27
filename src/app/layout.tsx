import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../ui/globals.css";
import Header from "./components/header/header";
import Navbar from "./components/nav/navbar";
import Footer from "./components/footer/footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="justify-center mx-40">
        <Header />
        <Navbar />
        <main className={manrope.className}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
