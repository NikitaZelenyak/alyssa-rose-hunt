export default function Footer() {
  const styleSVG =
    "fill-white group-hover:fill-MainColor-100  group-focus:fill-MainColor-100 duration-300 ease-in-out";
  const ListStyle =
    "flex p-2 rounded-xl border border-MainColor-100   duration-300 ease-in-out group cursor-pointer";
  return (
    <div className="bg-BlackColor-200 relative py-20 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:flex items-center justify-between pb-12 border-b border-white">
          <h2>Alyssa Rose</h2>
          <nav className="block  mt-8 lg:mt-0 ">
            <ul className="grid gap-4 grid-cols-2 lg:grid-cols-4 items-center justify-between ">
              <li className="relative overflow-hidden group">
                <a
                  className="hover:text-MainColor-100 duration-300 ease-in-out"
                  href=""
                >
                  About me
                </a>
              </li>
              <li className="relative overflow-hidden group">
                <a
                  className="hover:text-MainColor-100 duration-300 ease-in-out"
                  href=""
                >
                  Products
                </a>
              </li>
              <li className="relative overflow-hidden group">
                <a
                  className=" hover:text-MainColor-100 duration-300 ease-in-out"
                  href=""
                >
                  Shop
                </a>
              </li>
              <li className="relative overflow-hidden group">
                <a
                  className="hover:text-MainColor-100 duration-300 ease-in-out"
                  href=""
                >
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
          <ul className=" z-20 mt-8 lg:mt-0 flex  gap-2 items-center justify-center lg:justify-between">
            <li className={`${ListStyle}`}>
              <a href="">
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
            <li className={`${ListStyle}`}>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={`${styleSVG}`}
                    fill="currentColor"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                  />
                </svg>
              </a>
            </li>
            <li className={`${ListStyle}`}>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
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
          </ul>
        </div>
        <div className="flex justify-between ">
          <p className="mt-8 text-[16px] text-MainColor-100">
            ©2023 Alyssa Rose. All rights reserved.
          </p>
        </div>
      </div>
      <div className=" hidden lg:block absolute right-0 bottom-0  z-10 bg-BlackColor-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 48 48"
        >
          <path
            fill="none"
            stroke="rgb(255, 255, 255)"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M27.91 4.5v17.85a7.57 7.57 0 1 0 2.24 5.38V13.61l11 3.4V9ZM23 12h-.07a15.77 15.77 0 1 0 15.44 15.72"
          />
        </svg>
      </div>
    </div>
  );
}
