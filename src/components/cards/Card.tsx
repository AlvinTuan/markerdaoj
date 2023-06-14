import React from "react";

interface props {
  img: string;
  title: string;
  date: string;
}

const Card: React.FC<props> = ({ img, title, date }) => {
  return (
    <div>
      <div className="w-[300px] h-auto border-solid border rounded-lg">
        <img src={`${img}`} alt="" className="rounded-lg" />
        <div className="py-3 px-5 bg-white">
          <h3 className="text-[17px] font-normal h-[46px]">
            <span>{title}</span>
          </h3>
          <div className="text-[#868686] mt-2 mb-3">
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
