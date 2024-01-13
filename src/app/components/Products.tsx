export default function Products() {
  const styleSVG =
    "fill-MainColor group-hover:fill-AccentColor  group-focus:fill-AccentColor duration-300 ease-in-out";
  return (
    <div id="products" className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="h2">Products</h2>
        </div>

        <ul className=" mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* <li className="bg-MainColor-100 p-10 rounded-xl shadow-sm shadow-MainColor-200 hover:shadow-xl hover:shadow-MainColor-200 ease-in-out duration-300 group">
            <a href="" className="flex flex-col items-center">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
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
              </div>
              <p className="text-center mt-4">
                Check out my exclusive merchandise on Shopify! Get stylish
                clothing and unique memorabilia representing my music. Your
                purchase directly supports my creative journey. Thanks for
                joining the musical adventure!
              </p>
            </a>
          </li> */}
          <li className="bg-MainColor-100 p-10 rounded-xl shadow-sm shadow-MainColor-200 hover:shadow-xl hover:shadow-MainColor-200 ease-in-out duration-300 group">
            <a
              rel="nofollow"
              target="_blank"
              href="https://open.spotify.com/artist/5OV9SlnnRrE6grZoukQL1e"
              className="flex flex-col items-center"
            >
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={`${styleSVG}`}
                    fill="currentColor"
                    d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                  />
                </svg>
                <div className="absolute -top-36 translate-x-[-32%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="340"
                    height="335"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="none"
                      stroke="rgb(0, 134, 255)"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M27.91 4.5v17.85a7.57 7.57 0 1 0 2.24 5.38V13.61l11 3.4V9ZM23 12h-.07a15.77 15.77 0 1 0 15.44 15.72"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-center mt-4 z-20">
                Stream all my music on Spotify! Follow for instant updates on
                new releases. Find the perfect soundtrack for your moments and
                support my musical endeavors.
              </p>
            </a>
          </li>
          <li className="bg-MainColor-100 p-10 rounded-xl shadow-sm shadow-MainColor-200 hover:shadow-xl hover:shadow-MainColor-200 ease-in-out duration-300 group">
            <a
              rel="nofollow"
              target="_blank"
              href="https://www.youtube.com/@alyssarosehunt"
              className="flex flex-col items-center"
            >
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={`${styleSVG}`}
                    fill="currentColor"
                    d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476h.489ZM9.999 8.5v7l6-3.5l-6-3.5Z"
                  />
                </svg>
              </div>
              <p className="text-center mt-4">
                Explore my musical world on YouTube! Subscribe for the latest
                music videos, live performances, and behind-the-scenes content.
                Join me on a journey through sound and visuals to explore the
                magic of music together.
              </p>
            </a>
          </li>
          <li className="bg-MainColor-100 p-10 rounded-xl shadow-sm shadow-MainColor-200 hover:shadow-xl hover:shadow-MainColor-200 ease-in-out duration-300 group">
            <a
              rel="nofollow"
              target="_blank"
              href="https://music.apple.com/us/artist/alyssa-rose-hunt/1536065338"
              className="flex flex-col items-center"
            >
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={`${styleSVG}`}
                    fill="currentColor"
                    d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.877-.726a10.496 10.496 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026c-.747.043-1.49.123-2.193.4c-1.336.53-2.3 1.452-2.865 2.78c-.192.448-.292.925-.363 1.408a10.61 10.61 0 0 0-.1 1.18c0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424c.05.815.154 1.624.497 2.373c.65 1.42 1.738 2.353 3.234 2.801c.42.127.856.187 1.293.228c.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 0 0 1.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 0 0 1.88-2.207c.186-.42.293-.87.37-1.324c.113-.675.138-1.358.137-2.04c-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206c-.29.59-.76.962-1.388 1.14c-.35.1-.706.157-1.07.173c-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 0 1 1.038-2.022c.323-.16.67-.25 1.018-.324c.378-.082.758-.153 1.134-.24c.274-.063.457-.23.51-.516a.904.904 0 0 0 .02-.193c0-1.815 0-3.63-.002-5.443a.725.725 0 0 0-.026-.185c-.04-.15-.15-.243-.304-.234c-.16.01-.318.035-.475.066c-.76.15-1.52.303-2.28.456l-2.325.47l-1.374.278c-.016.003-.032.01-.048.013c-.277.077-.377.203-.39.49c-.002.042 0 .086 0 .13c-.002 2.602 0 5.204-.003 7.805c0 .42-.047.836-.215 1.227c-.278.64-.77 1.04-1.434 1.233c-.35.1-.71.16-1.075.172c-.96.036-1.755-.6-1.92-1.544c-.14-.812.23-1.685 1.154-2.075c.357-.15.73-.232 1.108-.31c.287-.06.575-.116.86-.177c.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882c0-.123.013-.25.042-.37c.07-.285.273-.448.546-.518c.255-.066.515-.112.774-.165c.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403c.22-.043.442-.088.663-.106c.31-.025.523.17.554.482c.008.073.012.148.012.223c.002 1.91.002 3.822 0 5.732z"
                  />
                </svg>
              </div>
              <p className="text-center mt-4">
                Stream my music on Apple Music. Create playlists, share tunes,
                and enjoy the journey. Your support matters!
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
