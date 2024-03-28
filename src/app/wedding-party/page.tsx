import { Manrope } from "next/font/google";

const manropeLight = Manrope({ weight: "200", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="columns-2 pt-5 text-left mx-10">
      <div>
        <p className={`text-5xl ${manropeLight.className}`}>The Bridesmaids</p>
        <p className="text 2xl">Aidan - Man of Honor</p>
        <p>Karate</p>
        <br />
        <p className="text 2xl">Tipheret</p>
        <p>High school</p>
        <br />
        <p className="text 2xl">Lauren</p>
        <p>High school</p>
      </div>
      <div>
        <h2 className={manropeLight.className}>The Groomsmen</h2>
        <h3>James</h3>
        <p>Best Man</p>
      </div>
    </div>
  );
}
