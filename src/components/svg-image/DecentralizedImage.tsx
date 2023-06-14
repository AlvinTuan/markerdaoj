import React from "react";

const DecentralizedImage: React.FC = () => {
  return (
    <>
      <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
        <g opacity="0.1">
          <circle cx="75" cy="75" r="75" fill="#1AAB9B"></circle>
          <circle cx="75" cy="75" r="75" fill="#1AAB9B"></circle>
        </g>
        <g opacity="0.1">
          <circle cx="75" cy="75" r="65" fill="#1AAB9B"></circle>
          <circle cx="75" cy="75" r="65" fill="#1AAB9B"></circle>
        </g>
        <circle cx="75" cy="75" r="50" fill="#1AAB9B"></circle>
        <path
          d="M53.1008 88V66.8208L69.1623 78.9078V88H73.2632V78.0552C73.2632 77.3036 72.91 76.5957 72.3094 76.1438L52.8305 61.4851C51.2541 60.2987 49 61.4235 49 63.3965V88H53.1008Z"
          fill="white"
        ></path>
        <path
          d="M97.5221 88V66.8208L81.4605 78.9078V88H77.3597V78.0552C77.3597 77.3036 77.7129 76.5957 78.3135 76.1438L97.7923 61.4851C99.3688 60.2987 101.623 61.4235 101.623 63.3965V88H97.5221Z"
          fill="white"
        ></path>
      </svg>
    </>
  );
};

export default DecentralizedImage;
