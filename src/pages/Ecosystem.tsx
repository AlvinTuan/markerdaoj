/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import LinkTag from "../components/tag/LinkTag";
import labelItem from "../DataJson/LabelItem.json";
import TypeList from "../components/tag/TypeList";
import contributors from "../DataJson/Contributor.json";
import GetDai from "../DataJson/GetDai.json";
import UseDai from "../DataJson/UseDai.json";
import HoldDai from "../DataJson/HoldDai.json";
import AcceptDai from "../DataJson/AcceptDai.json";
import DeFI from "../DataJson/DeFI.json";
import Games from "../DataJson/Games.json";

const Ecosystem = () => {
  const [toggle, setToggle] = useState(1);

  function handleClick(id: number) {
    setToggle(id);
  }
  return (
    <>
      <div className="mt-20 w-[1040px] mx-auto mb-[77px]">
        <div className=" text-center mt-10">
          <h1 className="text-5xl font-medium">Maker Ecosystem</h1>
          <span className="text-xl mt-4 inline-block font-light">
            Explore apps and services using Dai.
          </span>
        </div>
        <h2 className="text-2xl font-medium mt-20 mb-8">
          Made by MakerDAO contributors
        </h2>
        <div className="grid grid-cols-2 gap-x-9">
          {contributors.length > 0 &&
            contributors.map((item) => (
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
        <h2 className="text-2xl font-medium mt-20">Made by the community</h2>
        <div className="made-com mt-4">
          {labelItem.map((item) => (
            <span
              key={item.index}
              onClick={() => handleClick(item.index)}
              className={
                toggle === item.index ? "text-secondary" : "text-third"
              }
            >
              {item.label}
            </span>
          ))}
        </div>
        <div className="mt-9">
          {toggle === 1 && GetDai && <TypeList typeList={GetDai || []} />}
          {toggle === 2 && UseDai && <TypeList typeList={UseDai || []} />}
          {toggle === 3 && GetDai && <TypeList typeList={HoldDai || []} />}
          {toggle === 4 && AcceptDai && <TypeList typeList={AcceptDai || []} />}
          {toggle === 5 && DeFI && <TypeList typeList={DeFI || []} />}
          {toggle === 6 && Games && <TypeList typeList={Games || []} />}
        </div>
        <a
          href="https://github.com/makerdao/awesome-makerdao#dai-1"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-lg text-primary hover:text-hover"
        >
          <span>See all ecosystem apps</span>
        </a>
        <div className="mt-24 mb-3 text-center">
          <h1 className="font-medium text-4xl">
            <span>Want to contribute to the Maker ecosystem?</span>
          </h1>
          <p className="max-w-[592px] mx-auto mt-2 text-xl">
            <span>
              The go-to resource for developers to start building with Maker.
            </span>
          </p>
          <a
            href="https://docs.makerdao.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 text-xl font-medium inline-block underline text-primary hover:text-hover hover:no-underline"
          >
            <span>Visit Developer Documentation</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Ecosystem;
