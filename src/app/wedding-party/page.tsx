import { Manrope } from "next/font/google";

const manropeLight = Manrope({ weight: "200", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="columns-2 py-10 text-left px-20">
      <div>
        <p className={`text-4xl ${manropeLight.className}`}>The Bridesmaids</p>
        <br />
        <div className="pl-5">
          <p className="text-2xl">Aidan - Man of Honor</p>
          <p>Karate</p>
          <br />
          <p className="text-2xl">Tipheret</p>
          <p>High school</p>
          <br />
          <p className="text-2xl">Lauren</p>
          <p>High school</p>
        </div>
      </div>
      <div>
        <p className={`text-4xl ${manropeLight.className}`}>The Groomsmen</p>
        <br />
        <div className="pl-5">
          <p className="text-2xl">James - Best Man</p>
          <p>College</p>
          <br />
          <p className="text-2xl">Will</p>
          <p>College</p>
          <br />
          <p className="text-2xl">TBD</p>
          <p>Unknown</p>
        </div>
      </div>
    </div>
  );
}
