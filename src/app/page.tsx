import Image from "next/image";
import mountainLandscapeImage from "../../public/mountain_landscape.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
        <div>
          <p>Wedding Day</p>
          <p>Saturday, February 15th 2025</p>
          <p>Della Terra Mountain Chateau</p>
          <div className="row-span-2">
            <p>2:30pm</p>
            <p>Ceremony</p>
          </div>

          <p>3:00pm</p>
        </div>
      </div>
    </main>
  );
}
