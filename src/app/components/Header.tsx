import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../../public/image/logo.jpg";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const styleSVG =
    "fill-MainColor group-hover:fill-AccentColor  group-focus:fill-AccentColor duration-300 ease-in-out";
  const ListStyle =
    "flex p-2 rounded-xl border border-MainColor-100  hover:border-AccentColor  focus:border-AccentColor duration-300 ease-in-out group cursor-pointer";
  return (
    <header className="sticky top-0 z-40 bg-black">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Alyssa Rose Hunt</span>
            <Image
              src={logo}
              width={150}
              height={20}
              alt={"Alyssa Rose Hunt"}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-MainColor-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex gap-4 items-center justify-between ">
            <li className="relative overflow-hidden group">
              <a
                className="hover__color duration-300 ease-in-out"
                href="#about-me"
              >
                About me
              </a>
              <span className=" absolute bottom-0  left-0 h-[2px]  translate-x-[-110%]  group-hover:translate-x-[0] w-full  ease-in-out duration-300 bg-AccentColor"></span>
            </li>
            <li className="relative overflow-hidden group">
              <a
                className="hover__color duration-300 ease-in-out"
                href="#products"
              >
                Products
              </a>
              <span className=" absolute bottom-0  left-0 h-[2px]  translate-x-[-110%]  group-hover:translate-x-[0] w-full  ease-in-out duration-300 bg-AccentColor"></span>
            </li>
            {/* <li className="relative overflow-hidden group">
              <a
                className=" text-AccentGreenColor duration-300 ease-in-out"
                href="#shop"
              >
                Shop
              </a>
              <span className=" absolute bottom-0  left-0 h-[2px]  translate-x-[-110%]  group-hover:translate-x-[0] w-full  ease-in-out duration-300 bg-AccentGreenColor"></span>
            </li> */}
            <li className="relative overflow-hidden group">
              <a
                className="hover__color duration-300 ease-in-out"
                href="#contacts"
              >
                Contacts
              </a>
              <span className=" absolute bottom-0  left-0 h-[2px]  translate-x-[-110%]  group-hover:translate-x-[0] w-full  ease-in-out duration-300 bg-AccentColor"></span>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ul className="hidden lg:flex gap-2 items-center justify-between">
            <li className={`${ListStyle}`}>
              {/* apple music */}
              <a
                rel="nofollow"
                target="_blank"
                href="https://m.imdb.com/name/nm12772386/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 448 512"
                >
                  <path
                    className={`${styleSVG}`}
                    fill="currentColor"
                    d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48M21.3 229.2H21c.1-.1.2-.3.3-.4zM97 319.8H64V192h33zm113.2 0h-28.7v-86.4l-11.6 86.4h-20.6l-12.2-84.5v84.5h-29V192h42.8c3.3 19.8 6 39.9 8.7 59.9l7.6-59.9h43zm11.4 0V192h24.6c17.6 0 44.7-1.6 49 20.9c1.7 7.6 1.4 16.3 1.4 24.4c0 88.5 11.1 82.6-75 82.5m160.9-29.2c0 15.7-2.4 30.9-22.2 30.9c-9 0-15.2-3-20.9-9.8l-1.9 8.1h-29.8V192h31.7v41.7c6-6.5 12-9.2 20.9-9.2c21.4 0 22.2 12.8 22.2 30.1zM265 229.9c0-9.7 1.6-16-10.3-16v83.7c12.2.3 10.3-8.7 10.3-18.4zm85.5 26.1c0-5.4 1.1-12.7-6.2-12.7c-6 0-4.9 8.9-4.9 12.7c0 .6-1.1 39.6 1.1 44.7c.8 1.6 2.2 2.4 3.8 2.4c7.8 0 6.2-9 6.2-14.4z"
                  />
                </svg>
              </a>
            </li>
            <li className={`${ListStyle}`}>
              {/* apple music */}
              <a
                rel="nofollow"
                target="_blank"
                href="https://music.apple.com/us/artist/alyssa-rose-hunt/1536065338"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={`${styleSVG}`}
                    fill="currentColor"
                    d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.877-.726a10.496 10.496 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026c-.747.043-1.49.123-2.193.4c-1.336.53-2.3 1.452-2.865 2.78c-.192.448-.292.925-.363 1.408a10.61 10.61 0 0 0-.1 1.18c0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424c.05.815.154 1.624.497 2.373c.65 1.42 1.738 2.353 3.234 2.801c.42.127.856.187 1.293.228c.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 0 0 1.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 0 0 1.88-2.207c.186-.42.293-.87.37-1.324c.113-.675.138-1.358.137-2.04c-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206c-.29.59-.76.962-1.388 1.14c-.35.1-.706.157-1.07.173c-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 0 1 1.038-2.022c.323-.16.67-.25 1.018-.324c.378-.082.758-.153 1.134-.24c.274-.063.457-.23.51-.516a.904.904 0 0 0 .02-.193c0-1.815 0-3.63-.002-5.443a.725.725 0 0 0-.026-.185c-.04-.15-.15-.243-.304-.234c-.16.01-.318.035-.475.066c-.76.15-1.52.303-2.28.456l-2.325.47l-1.374.278c-.016.003-.032.01-.048.013c-.277.077-.377.203-.39.49c-.002.042 0 .086 0 .13c-.002 2.602 0 5.204-.003 7.805c0 .42-.047.836-.215 1.227c-.278.64-.77 1.04-1.434 1.233c-.35.1-.71.16-1.075.172c-.96.036-1.755-.6-1.92-1.544c-.14-.812.23-1.685 1.154-2.075c.357-.15.73-.232 1.108-.31c.287-.06.575-.116.86-.177c.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882c0-.123.013-.25.042-.37c.07-.285.273-.448.546-.518c.255-.066.515-.112.774-.165c.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403c.22-.043.442-.088.663-.106c.31-.025.523.17.554.482c.008.073.012.148.012.223c.002 1.91.002 3.822 0 5.732z"
                  />
                </svg>
              </a>
            </li>
            <li className={`${ListStyle}`}>
              {/* spotify */}
              <a
                rel="nofollow"
                target="_blank"
                href="https://open.spotify.com/artist/5OV9SlnnRrE6grZoukQL1e"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={`${styleSVG}`}
                    fill="currentColor"
                    d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                  />
                </svg>
              </a>
            </li>
            <li className={`${ListStyle}`}>
              {/* youtube */}
              <a
                rel="nofollow"
                target="_blank"
                href="https://www.youtube.com/@alyssarosehunt"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={`${styleSVG}`}
                    fill="currentColor"
                    d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476h.489ZM9.999 8.5v7l6-3.5l-6-3.5Z"
                  />
                </svg>
              </a>
            </li>
            <li className={`${ListStyle}`}>
              {/* inst */}
              <a
                rel="nofollow"
                target="_blank"
                href="https://www.instagram.com/alyssarosehunt/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={`${styleSVG}`}
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Alyssa Rose Hunt</span>
              <div className="h1">Alyssa Rose Hunt</div>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-MainColor-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <nav className="lg:hidden block">
                  <ul className="flex flex-col gap-4 items-center justify-between ">
                    <li className="relative overflow-hidden group">
                      <a
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover__color duration-300 ease-in-out"
                        href="#about-me"
                      >
                        About me
                      </a>
                      <span className=" absolute bottom-0  left-0 h-[2px]  translate-x-[-110%]  group-hover:translate-x-[0] w-full  ease-in-out duration-300 bg-AccentColor"></span>
                    </li>
                    <li className="relative overflow-hidden group">
                      <a
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover__color duration-300 ease-in-out"
                        href="#products"
                      >
                        Products
                      </a>
                      <span className=" absolute bottom-0  left-0 h-[2px]  translate-x-[-110%]  group-hover:translate-x-[0] w-full  ease-in-out duration-300 bg-AccentColor"></span>
                    </li>
                    {/* <li className="relative overflow-hidden group">
                      <a
                        className=" text-AccentGreenColor duration-300 ease-in-out"
                        href="#shop"
                      >
                        Shop
                      </a>
                      <span className=" absolute bottom-0  left-0 h-[2px]  translate-x-[-110%]  group-hover:translate-x-[0] w-full  ease-in-out duration-300 bg-AccentGreenColor"></span>
                    </li> */}
                    <li className="relative overflow-hidden group">
                      <a
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover__color duration-300 ease-in-out"
                        href="#contacts"
                      >
                        Contacts
                      </a>
                      <span className=" absolute bottom-0  left-0 h-[2px]  translate-x-[-110%]  group-hover:translate-x-[0] w-full  ease-in-out duration-300 bg-AccentColor"></span>
                    </li>
                  </ul>
                </nav>
                <ul className="lg:hidden mt-12 flex gap-2 items-center justify-between">
                  <li className={`${ListStyle}`}>
                    {/* apple music */}
                    <a
                      rel="nofollow"
                      target="_blank"
                      href="https://music.apple.com/us/artist/alyssa-rose-hunt/1536065338"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                      >
                        <path
                          className={`${styleSVG}`}
                          fill="currentColor"
                          d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.877-.726a10.496 10.496 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026c-.747.043-1.49.123-2.193.4c-1.336.53-2.3 1.452-2.865 2.78c-.192.448-.292.925-.363 1.408a10.61 10.61 0 0 0-.1 1.18c0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424c.05.815.154 1.624.497 2.373c.65 1.42 1.738 2.353 3.234 2.801c.42.127.856.187 1.293.228c.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 0 0 1.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 0 0 1.88-2.207c.186-.42.293-.87.37-1.324c.113-.675.138-1.358.137-2.04c-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206c-.29.59-.76.962-1.388 1.14c-.35.1-.706.157-1.07.173c-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 0 1 1.038-2.022c.323-.16.67-.25 1.018-.324c.378-.082.758-.153 1.134-.24c.274-.063.457-.23.51-.516a.904.904 0 0 0 .02-.193c0-1.815 0-3.63-.002-5.443a.725.725 0 0 0-.026-.185c-.04-.15-.15-.243-.304-.234c-.16.01-.318.035-.475.066c-.76.15-1.52.303-2.28.456l-2.325.47l-1.374.278c-.016.003-.032.01-.048.013c-.277.077-.377.203-.39.49c-.002.042 0 .086 0 .13c-.002 2.602 0 5.204-.003 7.805c0 .42-.047.836-.215 1.227c-.278.64-.77 1.04-1.434 1.233c-.35.1-.71.16-1.075.172c-.96.036-1.755-.6-1.92-1.544c-.14-.812.23-1.685 1.154-2.075c.357-.15.73-.232 1.108-.31c.287-.06.575-.116.86-.177c.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882c0-.123.013-.25.042-.37c.07-.285.273-.448.546-.518c.255-.066.515-.112.774-.165c.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403c.22-.043.442-.088.663-.106c.31-.025.523.17.554.482c.008.073.012.148.012.223c.002 1.91.002 3.822 0 5.732z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className={`${ListStyle}`}>
                    {/* spotify */}
                    <a
                      rel="nofollow"
                      target="_blank"
                      href="https://open.spotify.com/artist/5OV9SlnnRrE6grZoukQL1e"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                      >
                        <path
                          className={`${styleSVG}`}
                          fill="currentColor"
                          d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className=" flex p-2 rounded-xl border border-MainColor-100  hover:border-AccentGreenColor  focus:border-AccentGreenColor duration-300 ease-in-out group cursor-pointer">
                    <a rel="nofollow" target="_blank" href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                      >
                        <path
                          className={
                            "fill-MainColor group-hover:fill-AccentGreenColor  group-focus:fill-AccentGreenColor duration-300 ease-in-out "
                          }
                          fill="currentColor"
                          d="M14.9 5.1s-.2.06-.54.17c-.06-.18-.14-.41-.26-.63c-.38-.73-.94-1.11-1.62-1.12c-.05 0-.09 0-.14.01c-.02-.02-.04-.05-.06-.07c-.29-.32-.67-.47-1.12-.46c-.87.03-1.74.66-2.45 1.78c-.5.79-.87 1.78-.98 2.54c-1 .31-1.7.53-1.72.53c-.51.16-.52.18-.59.65c-.05.36-1.37 10.6-1.37 10.6L15.03 21V5.08c-.05 0-.1.01-.13.02zm-2.54.79c-.58.18-1.22.38-1.85.57c.18-.69.52-1.37.94-1.82c.16-.17.37-.35.63-.46c.24.51.29 1.22.28 1.71zm-1.19-2.31c.2 0 .38.04.53.14c-.24.12-.46.3-.68.53c-.55.59-.98 1.52-1.15 2.41c-.53.16-1.04.32-1.52.47c.3-1.41 1.48-3.51 2.82-3.55zm-1.7 7.99c.06.93 2.52 1.14 2.66 3.33c.11 1.72-.91 2.9-2.39 2.99C7.98 18 7 16.96 7 16.96l.37-1.59s.98.74 1.76.69c.51-.03.69-.45.68-.74c-.08-1.22-2.08-1.15-2.2-3.15c-.11-1.69 1-3.39 3.44-3.55c.95-.06 1.43.18 1.43.18l-.56 2.09s-.62-.28-1.36-.24c-1.08.07-1.1.75-1.09.92zm3.47-5.86c-.01-.44-.06-1.06-.27-1.59c.66.13.99.87 1.13 1.32c-.25.08-.54.17-.86.27zm2.45 15.25l4.56-1.13S17.99 6.57 17.98 6.48c-.01-.09-.09-.14-.16-.15c-.07-.01-1.35-.03-1.35-.03s-.78-.76-1.08-1.05v15.71z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className={`${ListStyle}`}>
                    {/* youtube */}
                    <a
                      rel="nofollow"
                      target="_blank"
                      href="https://www.youtube.com/@alyssarosehunt"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                      >
                        <path
                          className={`${styleSVG}`}
                          fill="currentColor"
                          d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476h.489ZM9.999 8.5v7l6-3.5l-6-3.5Z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className={`${ListStyle}`}>
                    {/* inst */}
                    <a
                      rel="nofollow"
                      target="_blank"
                      href="https://www.instagram.com/alyssarosehunt/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                      >
                        <path
                          className={`${styleSVG}`}
                          fill="currentColor"
                          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
