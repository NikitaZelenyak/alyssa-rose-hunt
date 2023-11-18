import Image from "next/image";
import AboutImg from "../../../public/image/AboutImg.png";
import AboutTop from "../../../public/image/AboutTop.png";
export default function AboutSection() {
  const styleSVG =
    "fill-MainColor group-hover:fill-AccentColor  group-focus:fill-AccentColor duration-300 ease-in-out";
  const ListStyle =
    "flex p-2 rounded-xl border border-MainColor-100  hover:border-AccentColor  focus:border-AccentColor duration-300 ease-in-out group cursor-pointer";
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="h2">
            About me
            <a href=""></a>
          </h2>
        </div>

        <div className="mt-16 gap-12 grid lg:grid-cols-2 items-center ">
          <div className="flex flex-col items-center relative">
            <p>
              Hello, I'm Alyssa, and I'm a passionate singer who lives for the
              joy of music. I've always had a deep connection with songs and
              melodies, and I love sharing my voice with the world. Whether it's
              a powerful ballad or an upbeat pop tune, I pour my heart and soul
              into every note. You can listen to my music on Apple Music and
              Spotify to experience my musical journey. Thank you for joining me
              on this incredible ride through the world of music.
            </p>
            <div className="hidden md:block absolute -bottom-36 -left-10 -rotate-45 -z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="220"
                height="240"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="rgb(0, 134, 255)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.225 24.903a98.832 98.832 0 0 0-12.78-12.65q-2.701-2.038-.181-3.765l2.931-1.717a4.2 4.2 0 0 1 5.713.623a80.332 80.332 0 0 1 10.5 16.746l-.33-17.62a2.714 2.714 0 0 1 2.85-.923a22.97 22.97 0 0 0 11.385 3.584q1.707 0 1.637 1.837l-.13 6.676A1.334 1.334 0 0 1 40.313 19a25.321 25.321 0 0 1-10.802-2.801l.04 9.637v7.67a8.697 8.697 0 0 1-11.967 8.374c-8.373-3.293-6.626-15.893 2.64-16.977Z"
                />
                <path
                  fill="none"
                  stroke="rgb(0, 134, 255)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.145 33.617q1.957-.602 5.01 2.992c3.001 3.192-.954 5.27-3.103 2.7q-3.082-3.262-1.907-5.692Z"
                />
              </svg>
            </div>
            <div className="hidden md:block absolute -bottom-16 right-0  -z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="180"
                height="180"
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
            <div className="hidden md:block absolute -top-36 left-24  -z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 48 48"
              >
                <g
                  fill="none"
                  stroke="rgb(0, 134, 255)"
                  stroke-linejoin="round"
                >
                  <circle cx="25.328" cy="23.997" r="9.244" />
                  <circle cx="25.328" cy="23.997" r="2.464" />
                  <path
                    stroke="rgb(0, 134, 255)"
                    d="M26.194 19.543a4.539 4.539 0 0 1 3.566 3.48m-5.299 5.43a4.538 4.538 0 0 1-3.566-3.48m5.905-7.94a7.12 7.12 0 0 1 5.432 5.233m-8.377 8.698a7.12 7.12 0 0 1-5.432-5.233"
                  />
                  <g stroke="rgb(0, 134, 255)">
                    <path d="M11.038 23.96c.015-7.891 6.424-14.277 14.316-14.263c7.892.015 14.277 6.424 14.263 14.316c-.008 7.887-6.405 14.276-14.292 14.275" />
                    <path d="M44.175 34.34c-5.712 10.41-18.78 14.217-29.19 8.505A21.498 21.498 0 0 1 4.657 29.9C1.396 18.483 8.01 6.585 19.426 3.326a21.499 21.499 0 0 1 16.45 1.939" />
                  </g>
                  <path
                    stroke="rgb(0, 134, 255)"
                    d="m35.874 5.264l-.004 9.087"
                  />
                </g>
                <circle cx="25.328" cy="23.997" r=".75" fill="currentColor" />
              </svg>
            </div>
            <ul className="flex mt-10 gap-8">
              <li className={`${ListStyle}`}>
                <a href="">
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
                </a>
              </li>
              <li className={`${ListStyle}`}>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
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
            </ul>
          </div>
          <div className="relative h-[200px] sm:h-[300px] md:h-[450px] ">
            <Image src={`${AboutImg.src}`} layout="fill" alt={"Alyssa Rose"} />
            <div className="relative w-[50%] h-[50%]  translate-x-[50%] translate-y-[50%]">
              <Image
                src={`${AboutTop.src}`}
                layout="fill"
                alt={"Alyssa Rose"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
