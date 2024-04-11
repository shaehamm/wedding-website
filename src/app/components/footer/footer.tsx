import { Alegreya_Sans_SC } from "next/font/google";

const alegreyaSansSC = Alegreya_Sans_SC({ weight: "300", subsets: ["latin"] });

export default function Footer() {
  return (
    <>
      <footer>
        <div className="flex text-center py-10 columns-3">
          <div>
            <p>/\/\/\</p>
          </div>
          <div>
            <h2 className={alegreyaSansSC.className}>S&C</h2>
            <h3>02.15.2025</h3>
          </div>
          <div>
            <p>/\/\/\</p>
          </div>
        </div>
      </footer>
    </>
  );
}
