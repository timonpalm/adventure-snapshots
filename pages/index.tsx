import type { Photo } from "../types";
import { Tab } from "@headlessui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import bgImage from "../public/bike_mountains.jpg";

import { Gallery } from "../components/Gallery";
import {getImages} from "../utils/image-util";

const tabs = [
  {
    key: "all",
    display: "All",
  },
];

type HomeProps = {
  oceans: Photo[];
  forests: Photo[];
};

export default function Home({ oceans, forests }: HomeProps) {
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

      <div className="fixed left-0 top-0 w-full h-full z-10 from-stone-900 bg-gradient-to-t"></div>

      <header className="fixed top-0 w-full z-30 flex justify-between items-center h-[90px] px-10">
        <span className="uppercase text-lg font-medium">
          Adventure Snapshots
        </span>
        <Link
          href="#"
          className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90"
        >
          Get in touch
        </Link>
      </header>

      <main className="relative pt-[110px] z-20">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2">
                  {({ selected }) => (
                    <span
                      className={classNames(
                        "uppercase text-lg",
                        selected ? "text-white" : "text-stone-600"
                      )}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="h-full h-full max-w-[900px] w-full p-2 sm:p-4 my-6">
              <Tab.Panel className="overflow-auto">
                <Gallery photos={allPhotos} />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="relative h-[90px] flex justify-center items-center uppercase text-lg font-medium z-20">
        <p>portfolio</p>
      </footer>
    </div>
  );
}
