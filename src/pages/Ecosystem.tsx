/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { Layout } from "antd";
import NavBarRouter from "../layout/NavBarRouter";
import LinkTag from "../components/tag/LinkTag";
import data from "../data.json";
import FooterMKD from "../components/footer/FooterMKD";
import labelItem from "../LabelItem.json";
import GetDaiList from "../components/tag/TypeList";
import TypeList from "../components/tag/TypeList";

const { Header, Footer } = Layout;

const Ecosystem: React.FC = () => {
  const [toggle, setToggle] = useState(1);

  function handleClick(id: number) {
    setToggle(id);
  }
  return (
    <>
      <Header className="layout-style">
        <NavBarRouter></NavBarRouter>
      </Header>
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
          {data.contributors.length > 0 &&
            data.contributors.map((item) => (
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
          <div className={toggle === 1 ? "block" : "hidden"}>
            <TypeList typeList={data.GetDai || []} />
          </div>
          <div className={toggle === 2 ? "block" : "hidden"}>
            <TypeList typeList={data.UseDai || []} />
          </div>
          <div className={toggle === 3 ? "block" : "hidden"}>
            <TypeList typeList={data.HoldDai || []} />
          </div>
          <div className={toggle === 4 ? "block" : "hidden"}>
            <TypeList typeList={data.AcceptDai || []} />
          </div>
          <div className={toggle === 5 ? "block" : "hidden"}>
            <TypeList typeList={data.DeFI || []} />
          </div>
          <div className={toggle === 6 ? "block" : "hidden"}>
            <TypeList typeList={data.Games || []} />
          </div>
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

      <Footer className="layout-style">
        <FooterMKD></FooterMKD>
      </Footer>
    </>
  );
};

export default Ecosystem;
