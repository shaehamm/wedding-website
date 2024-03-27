import Image from "next/image";
import mountainLandscapeImage from "../../public/mountain_landscape.jpg";
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
          <p className="text-center pt-10">
            ________________________________________________
          </p>
        </div>
        <div className="columns-2 pt-5">
          <div>
            <h3>2:30pm</h3>
          </div>
          <div>
            <h3>CEREMONY</h3>
            <p>Make your way to the ceremony and grab a blanket</p>
          </div>
        </div>
        <div className="columns-2 pt-5">
          <div>
            <h3>3:00pm</h3>
          </div>
          <div>
            <h3>COCKTAIL HOUR</h3>
            <p>Head inside and enjoy yourself</p>
          </div>
        </div>
        <div className="columns-2 pt-5">
          <div>
            <h3>4:30pm</h3>
          </div>
          <div>
            <h3>DINNER</h3>
            <p>Find your seat and dine with us</p>
          </div>
        </div>
      </div>
    </main>
  );
}
