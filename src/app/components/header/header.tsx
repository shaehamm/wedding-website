import { WindSong } from "next/font/google";

const windsong = WindSong({ weight: "400", subsets: ["latin"] });

export default function Header() {
  return (
    <>
      <div className="text-center py-10">
        <h1 className={windsong.className}>Shae & Connor</h1>
        <h3>Saturday, February 15th, 2025 • Estes Park, Colorado</h3>
      </div>
    </>
  );
}
