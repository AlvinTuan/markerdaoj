import React from "react";
import LinkTag from "./LinkTag";

interface obj {
  id: number;
  toLink: string;
  image: string;
  title: string;
  description: string;
}

interface props {
  typeList: obj[];
}

const TypeList: React.FC<props> = ({ typeList }) => {
  return (
    <div className="grid grid-cols-2 gap-x-9 gap-y-7">
      {typeList.map((item) => (
        <div key={item.id}>
          <LinkTag
            toLink={item.toLink || ""}
            img={item.image}
            title={item.title}
            description={item.description}
          ></LinkTag>
        </div>
      ))}
    </div>
  );
};

export default TypeList;
