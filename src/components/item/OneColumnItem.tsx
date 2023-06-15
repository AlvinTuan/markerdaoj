import React from "react";

interface props {
  title: string;
  describe: string;
  toLink: string;
  img: React.ReactNode;
}

const OneColumnItem: React.FC<props> = ({ title, describe, toLink, img }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-24">
        <div className="content max-w-[430px] text-left">
          <h2>
            <span className="text-2xl font-semibold">{title}</span>
          </h2>
          <p className="my-5 text-xl">
            <span>{describe}</span>
          </p>
          <a href="#" className="link-item text-xl">
            {toLink}
          </a>
        </div>
        <div className="mx-auto">{img}</div>
      </div>
    </>
  );
};

export default OneColumnItem;
