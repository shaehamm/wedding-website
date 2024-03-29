import Image from "next/image";
import mountainLandscapeImage from "../../public/mountain_landscape.jpg";
import { DAY_OF_SCHEDULE } from "../lib/constants";
import { Manrope } from "next/font/google";

const manropeLight = Manrope({ weight: "200", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pt-10">
      <div
        className={
          "z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"
        }
      >
        <Image
          priority
          src={mountainLandscapeImage}
          alt="Connor & Shae in the Rocky Mountains near Breckenridge, CO"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-center pt-10">
          <h2 className={manropeLight.className}>WEDDING DAY</h2>
          <h3>Saturday, February 15th 2025</h3>
          <h3>Della Terra Mountain Chateau</h3>
        </div>
        <div>
          {DAY_OF_SCHEDULE.map((item) => {
            return (
              <div key={item.time}>
                <div className="pt-5">
                  <hr />
                </div>
                <div className="columns-2 pt-5">
                  <div>
                    <h3>{item.time}</h3>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
