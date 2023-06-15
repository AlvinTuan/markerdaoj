import React, { useEffect, useState } from "react";
import { Layout, Space } from "antd";
import NavBarRouter from "../../layout/NavBarRouter";
import LinkTag from "./LinkTag";
import data from "../../data.json";
import FooterMKD from "../overview/FooterMKD";

const { Header, Footer } = Layout;

const Ecosystem = () => {
  const [toggle, setToggle] = useState(1);
  const [active, setActive] = useState(false);

  // function selected(id: number) {
  //   setToggle(id);
  // }
  function handleClick(id: number) {
    setToggle(id);
    setActive(!active);
  }
  return (
    <>
      <Header className="layout-style">
        <NavBarRouter></NavBarRouter>
      </Header>
      <div className="w-[1040px] mx-auto">
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
          <span
            onClick={() => handleClick(1)}
            className={toggle === 1 ? "text-secondary" : "text-third"}
          >
            Get Dai
          </span>
          <span
            onClick={() => handleClick(2)}
            className={toggle === 2 ? "text-secondary" : "text-third"}
          >
            Use Dai
          </span>
          <span
            onClick={() => handleClick(3)}
            className={toggle === 3 ? "text-secondary" : "text-third"}
          >
            Hold Dai
          </span>
          <span
            onClick={() => handleClick(4)}
            className={toggle === 4 ? "text-secondary" : "text-third"}
          >
            Accept Dai
          </span>
          <span
            onClick={() => handleClick(5)}
            className={toggle === 5 ? "text-secondary" : "text-third"}
          >
            DeFi
          </span>
          <span
            onClick={() => handleClick(6)}
            className={toggle === 6 ? "text-secondary" : "text-third"}
          >
            Games
          </span>
        </div>
        <div className="mt-9">
          <div className={toggle === 1 ? "block" : "hidden"}>
            <div className="grid grid-cols-2 gap-x-9 gap-y-7">
              {data.GetDai.length > 0 &&
                data.GetDai.map((item) => (
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
          </div>
          <div className={toggle === 2 ? "block" : "hidden"}>
            <div className="grid grid-cols-2 gap-x-9 gap-y-7">
              {data.UseDai.length > 0 &&
                data.UseDai.map((item) => (
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
          </div>
          <div className={toggle === 3 ? "block" : "hidden"}>
            <div className="grid grid-cols-2 gap-x-9 gap-y-7">
              {data.HoldDai.length > 0 &&
                data.HoldDai.map((item) => (
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
          </div>
          <div className={toggle === 4 ? "block" : "hidden"}>
            <div className="grid grid-cols-2 gap-x-9 gap-y-7">
              {data.AcceptDai.length > 0 &&
                data.AcceptDai.map((item) => (
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
          </div>
          <div className={toggle === 5 ? "block" : "hidden"}>
            <div className="grid grid-cols-2 gap-x-9 gap-y-7">
              {data.DeFI.length > 0 &&
                data.DeFI.map((item) => (
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
          </div>
          <div className={toggle === 6 ? "block" : "hidden"}>
            <div className="grid grid-cols-2 gap-x-9 gap-y-7">
              {data.Games.length > 0 &&
                data.Games.map((item) => (
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
          </div>
        </div>
      </div>

      <Footer className="layout-style">
        <FooterMKD></FooterMKD>
      </Footer>
    </>
  );
};

export default Ecosystem;
