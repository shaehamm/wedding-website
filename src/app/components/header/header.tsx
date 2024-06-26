import { Alegreya_Sans_SC } from "next/font/google";

const alegreyaSansSC = Alegreya_Sans_SC({ weight: "300", subsets: ["latin"] });

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
