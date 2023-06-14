import React from "react";
import Card from "../cards/Card";

const Recent = () => {
  return (
    <>
      <div className="mt-[68px] rounded-2xl">
        <h2 className="text-center">
          <span className="text-xl font-bold mx-auto">Recent blog posts</span>
        </h2>
        <div className="mt-11 flex flex-shrink justify-around absolute left-0 right-0 translate-y-[-20px]">
          <Card
            img="/Partnership-purple-scaled.jpg"
            title="MakerDAO Has Come Full Circle"
            date="20 tháng 7, 2021"
          ></Card>
          <Card
            img="/Governance-blue-scaled.jpg"
            title="Why the MakerDAO Forum Is the Heart of the Maker Community"
            date="22 tháng 4, 2021"
          ></Card>
          <Card
            img="/Product-red-scaled.jpg"
            title="A Brief History of Decentralized Finance (DeFi)"
            date="12 tháng 3, 2021"
          ></Card>
        </div>
      </div>
    </>
  );
};

export default Recent;
