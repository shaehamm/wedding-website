import { WindSong, Alegreya_Sans_SC } from "next/font/google";

const windsong = WindSong({ weight: "400", subsets: ["latin"] });
const alegreyaSansSC = Alegreya_Sans_SC({ weight: "300" });

export default function Header() {
  return (
    <>
      <div className="text-center py-10">
        <h1 className={alegreyaSansSC.className}>Shae & Connor</h1>
        <h3>Saturday, February 15th, 2025 • Estes Park, Colorado</h3>
      </div>
    </>
  );
}
