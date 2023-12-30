import Link from "next/link";

export default function NavMenu() {
    return (
        <header className="sticky top-0 w-full z-30 flex justify-between items-center h-[90px] px-10 bg-slate-600 bg-opacity-40">
        <ul
          className="mr-auto flex lg:flex-row"
          data-te-navbar-nav-ref>
          <li>
            <a
                className="block uppercase font-medium lg:p-2"
                href="/">
              Adventure Snapshots
            </a>
          </li>
          <li>
            <a
              className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
              href="/albums"
            >
              Albums
            </a>
          </li>
          <li>
            <a
              className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
              href="/about"
            >
              About
            </a>
          </li>
        </ul>

        {/* <Link
          href="#"
          className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-100"
        >
          Get in touch
        </Link> */}
      </header>
    )
}