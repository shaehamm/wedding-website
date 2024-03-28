import { Manrope } from "next/font/google";

const manropeLight = Manrope({ weight: "200", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="columns-2 pt-5 text-left">
      <div>
        <h2 className={manropeLight.className}>The Bridesmaids</h2>
        <h3>Aidan</h3>
        <p>Man of Honor</p>
      </div>
      <div>
        <h2 className={manropeLight.className}>The Groomsmen</h2>
        <h3>James</h3>
        <p>Best Man</p>
      </div>
    </div>
  );
}
