export default function Contacts() {
  const styleSVG =
    "fill-MainColor group-hover:fill-AccentColor  group-focus:fill-AccentColor duration-300 ease-in-out";
  const ListStyle =
    "flex p-2 rounded-xl border border-MainColor-100  hover:border-AccentColor  focus:border-AccentColor duration-300 ease-in-out group cursor-pointer";
  return (
    <div id="contacts" className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="h2 text-center">Contacts</h2>
          <p className="mt-8">
            I love connecting with my fans and fellow music enthusiasts. Whether
            you have questions, want to collaborate, or simply want to say
            hello, don't hesitate to reach out. You can contact me through any
            of the following channels:
          </p>
        </div>
        <ul className=" flex gap-8 items-center justify-center mt-12 p-12 border-t border-AccentColor">
          <li className={`${ListStyle}`}>
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
          <li className={`${ListStyle}`}>
            {/* facebook */}
            <a
              rel="nofollow"
              target="_blank"
              href="https://www.facebook.com/alyssa.hunt.315080"
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
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                />
              </svg>
            </a>
          </li>
          <li className={`${ListStyle}`}>
            <a
              rel="nofollow"
              target="_blank"
              href="mailto:alyssarhunt24@gmail.com"
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
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
