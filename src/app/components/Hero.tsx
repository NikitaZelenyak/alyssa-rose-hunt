import AlyssaBG from "../../../public/image/AlyssaBG.png";

export const Hero = () => {
  return (
    <>
      <div
        className="Container  relative mx-auto max-w-7xl py-30 lg:py-44 p-6 bg-cover bg-center lg:bg-right-top lg:bg-auto"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${AlyssaBG.src})`,
        }}
      >
        <div className="mx-auto max-w-2xl lg:mx-0 ">
          <h1 className="max-w-2xl mb-6 text-4xl font-bold tracking-tight text-gray-500 sm:text-6xl lg:col-span-2 xl:col-auto">
            Alyssa Rose Hunt
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-lg leading-8 text-gray-400">
              <span className="h1 ml-[4px]">Alyssa Rose Hunt</span> is an artist
              hailing from Vaughan, Ontario, Canada. With a passion for
              showcasing her art in various forms, she captivates audiences
              through her lyrics, voice, movement, visuals, and paintings.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="https://open.spotify.com/artist/5OV9SlnnRrE6grZoukQL1e"
                className="rounded-md ease-in-out duration-300 bg-AccentColor px-8 py-6 text-sm font-semibold text-white shadow-sm hover:bg-MainColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                GO TO MY SPOTIFY
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-BlackColor lg:bg-BlackColor-100 z-10 pointer-events-none"></div>
      </div>
    </>
  );
};
