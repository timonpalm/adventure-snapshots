import Head from "next/head";
import Image from "next/image";
import bgImage from "../public/bike_mountains.jpg";

import { Gallery } from "../components/Gallery";
import {getImages} from "../utils/image-util";
import NavMenu from "../components/NavMenu";

export default function Home() {
  const allPhotos = getImages();

  return (
    <div className="h-full">
      <Head>
        <title>Adventure Snapshots</title>
        <meta name="description" content="Collection of my adventure snapshots" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <Image
        priority
        className="fixed bg-cover"
        src={bgImage}
        alt="background-image"

      />

      <NavMenu />

      <main className="relative z-10 top-0">

        <div className="flex h-screen z-9 from-stone-900 bg-gradient-to-t text-center items-center justify-center uppercase text-lg font-medium">
          Explore the Collection of my Adventure Snapshots
        </div>
        <div className="bg-stone-900">
          <div className="p-10 px-60">
            <h1>This is my Story</h1>

            <section>
              <p>
                In 2021 I decided to go on a bike trip alone. It was first just planned to get to the south of Portugal and see how it goes.
                Everything turned out to be very fortunity and I really enjoyed the time on my bike. So, I continued my trip. But where to go next?
                Portugal is the western end of Europe. Going back, would have meant to go back to colder regions, as it was still winter at that time.
                I really wanted to got to Morocco but the bourders were closed at that time due to Covid. So I decided to take a ferry to the canary islands and 
                see if in the meantime the borders would open again. And they did.
              </p>
            </section>
          </div>
          <div className="py-10 px-60">
            <Gallery photos={allPhotos} />
          </div>
        </div>

      </main>

      <footer className="relative h-[90px] flex justify-center items-center uppercase text-lg font-medium z-20 bg-stone-900">
        <p>portfolio</p>
      </footer>
    </div>
  );
}
