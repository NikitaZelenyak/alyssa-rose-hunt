import { AllysaImage } from "../db/imageDB";
import { useState } from "react";
import Image from "next/image";
export const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageType, setImageType] = useState(true);
  const styleSVG =
    "fill-MainColor group-hover:fill-AccentColor  group-focus:fill-AccentColor duration-300 ease-in-out";
  const iframeContainerStyle = "w-full overflow-hidden flex justify-center ";
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? AllysaImage.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === AllysaImage.length - 1 ? 0 : prevIndex + 1
    );
  };
  const classNameBTN =
    "rounded-md ease-in-out duration-300 bg-AccentColor  px-4 py-2  text-sm font-semibold text-white shadow-sm hover:bg-MainColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 ">
      <h2 className="sr-only">Alyssa Rose Hunt Image Gallery</h2>
      <div className="flex items-center justify-center gap-8 mb-6 relative">
        <button
          onClick={() => setImageType(true)}
          className={`${classNameBTN} ${imageType && "bg-MainColor"}`}
          type="button"
        >
          Alyssa Rose Hunt
        </button>
        <a
          className={`${classNameBTN} ${!imageType && "bg-MainColor"}`}
          href="https://vs.co/875ubl0n"
          target="_blank"
        >
          Alyssa's photo
        </a>
      </div>
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
        <div
          className={`${iframeContainerStyle} relative w-[300px] h-[280px] md:w-[620px] md:h-[480px] lg:w-[820px] lg:h-[680px]`}
        >
          {AllysaImage.map((src, index) => (
            <Image
              className={`${index === currentIndex ? "  block" : "hidden"}`}
              layout="fill"
              src={`${src}`}
              alt={"ALyssa"}
            />
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
