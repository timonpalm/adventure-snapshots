import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import bgImage from "../public/bike_mountains.jpg";

import { Gallery } from "../components/Gallery";
import {getImages} from "../utils/image-util";

export default function Home() {
  const allPhotos = getImages();

  return (
    <div className="h-full overflow-auto">
      <Head>
        <title>Adventure Snapshots</title>
        <meta name="description" content="Collection of my adventure snapshots" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <Image
        priority
        className="fixed left-0 top-0 z-0"
        src={bgImage}
        alt="background-image"
        placeholder="blur"

      />

      <div className=""></div>

      <header className="sticky top-0 w-full z-30 flex justify-between items-center h-[90px] px-10 bg-slate-600 opacity-40 bg-opacity-40">
        <span className="uppercase text-lg font-medium opacity-100">
          Adventure Snapshots
        </span>
        <Link
          href="#"
          className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-100"
        >
          Get in touch
        </Link>
      </header>

      <main className="relative z-10 top-0">

        <div className="flex w-full h-screen z-9 from-stone-900 bg-gradient-to-t text-center items-center justify-center uppercase text-lg font-medium">
          Explore the Collection of my Adventure Snapshots
        </div>
        <div className="bg-stone-900">
          <div className="p-10">
            SomfajdkjlsaFjlsdflzsdjfzlsdfjsd
          </div>
          <div className="p-10">
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
