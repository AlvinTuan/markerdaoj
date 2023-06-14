import React from "react";

interface props {
  img: React.ReactNode;
  describe: string;
}

const CommunityItem: React.FC<props> = ({ img, describe }: props) => {
  return (
    <div className="w-[85px] flex flex-col justify-center items-center cursor-pointer hover:bg-[#e2e8f0] rounded-xl py-2">
      <a href="#" className="page-community">
        <div className="mb-3">{img}</div>
      </a>
      <span className={`text-xl font-medium `}>{describe}</span>
    </div>
  );
};

export default CommunityItem;
