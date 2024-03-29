import { useState } from "react";
import { VideoLinks } from "../db/videoDB";

export const VideoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const styleSVG =
    "fill-MainColor group-hover:fill-AccentColor  group-focus:fill-AccentColor duration-300 ease-in-out";
  const iframeContainerStyle = "w-full overflow-hidden flex justify-center ";
  const iframeStyle = " w-[280px] h-[250px] md:w-[800px] md:h-[600px]";

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? VideoLinks.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === VideoLinks.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Alyssa Rose Hunt Video Gallery</h2>
      <div className="w-full flex items-center justify-center gap-2 md:gap-8">
        <button className="group" type="button" onClick={handlePrevClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
          >
            <path
              className={`${styleSVG}`}
              fill="currentColor"
              d="M18.464 2.114a.998.998 0 0 0-1.033.063l-13 9a1.003 1.003 0 0 0 0 1.645l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-.536-.886zM17 19.091L6.757 12L17 4.909v14.182z"
            />
          </svg>
        </button>
        <div className={iframeContainerStyle}>
          {VideoLinks.map((src, index) => (
            <iframe
              key={index}
              className={`${iframeStyle} ${
                index === currentIndex ? "  block" : "hidden"
              }`}
              src={`${src}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ))}
        </div>
        <button className="group" type="button" onClick={handleNextClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
          >
            <path
              className={`${styleSVG}`}
              fill="currentColor"
              d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909L17.243 12L7 19.091V4.909z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
