import React from "react";

interface props {
  toLink: string;
  img: string;
  title: string;
  description: string;
}

const LinkTag: React.FC<props> = ({ toLink, img, title, description }) => {
  return (
    <>
      <a href={`${toLink}`} target="_blank" rel="noopener noreferrer">
        <div className="flex gap-x-6 py-4 border border-borderColor rounded-xl justify-center h-full">
          <div className="img-container w-20 h-20">
            <img src={`${img}`} alt="" className="object-cover rounded-lg" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-xl font-medium mb-1">{title}</h4>
            <span className="text-description text-base w-[355px]">
              {description}
            </span>
          </div>
        </div>
      </a>
    </>
  );
};

export default LinkTag;
