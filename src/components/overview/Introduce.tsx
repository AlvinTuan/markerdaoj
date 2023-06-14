import React from "react";

const Introduce = () => {
  return (
    <div className="introduce w-[930px] ml-[393px] mt-[150px] mb-[190px]">
      <div className="title-introduce">
        <h1>
          <span className="text-5xl font-medium leading-8">
            A better, smarter currency
          </span>
        </h1>
      </div>
      <div className="subtitle-introduce mt-5">
        <span className="text-xl">
          Dai can be used by anyone, anywhere, anytime.
        </span>
      </div>
      <div className="call-to-action flex items-center gap-x-4 mt-6 pl-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 icon-play"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
          />
        </svg>

        <span className="text-xl play-vid cursor-pointer font-medium">
          Play video
        </span>
      </div>
    </div>
  );
};

export default Introduce;
