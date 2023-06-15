import React from "react";
import { NavLink } from "react-router-dom";
import MenuItem from "./MenuItem";
import LogoMakerDao from "../components/svg-image/LogoMakerDao";
import { element } from "prop-types";
import HomePage from "../pages/HomePage";

const NavBarRouter = () => {
  return (
    <>
      <div className="container flex justify-between items-center px-[14px] mt-5 w-[1250px] mx-auto">
        <NavLink to={"/"}>
          <LogoMakerDao></LogoMakerDao>
        </NavLink>
        {/* <div className="absolute right-[292px] w-[880px] h-[64px] "></div> */}
        <div className="flex justify-center items-center gap-x-[70px]">
          <NavLink to={"/ecosystem"} className={"menu-item"}>
            Ecosystem
          </NavLink>
          <div className="dropdown">
            <button className="menu-item">Developers</button>
            <div className="dropdown-content rounded-xl">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.makerdao.com/"
              >
                Documentation
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.comhttps://docs.makerdao.com/build/dai.js"
              >
                Dai.js
              </a>
              <a
                href="https://github.com/makerdao/developerguides"
                target="_blank"
                rel="noopener noreferrer"
              >
                Developer Guides
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://immunefi.com/bounty/makerdao/"
              >
                Bug Bounty
              </a>
            </div>
          </div>
          <div className="dropdown">
            <button className="menu-item">Learn</button>
            <div className="dropdown-content rounded-xl">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://makerdao.com/vi/whitepaper"
              >
                Whitepaper
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://awesome.makerdao.com/#faqs"
              >
                FAQs
              </a>
            </div>
          </div>
          <div className="dropdown">
            <button className="menu-item">Foundation</button>
            <div className="dropdown-content rounded-xl">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://makerdao.com/vi/contact"
              >
                Contact
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://forum.makerdao.com/c/legacy/resources-job-opportunities/11"
              >
                Job Opportunities
              </a>
            </div>
          </div>
          <div className="dropdown">
            <button className="menu-item">Community</button>
            <div className="dropdown-content rounded-xl">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://blog.makerdao.com/"
              >
                Blog
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.com/invite/RBRumCpEDH"
              >
                Chat
              </a>
              <a
                href="https://start.makerdao.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Forum
              </a>
            </div>
          </div>

          {/* <MenuItem href="#" name="Learn"></MenuItem>
            <MenuItem href="#" name="Foundation"></MenuItem>
            <MenuItem href="#" name="Community"></MenuItem> */}
          <MenuItem href="https://vote.makerdao.com/" name="Vote"></MenuItem>
        </div>
      </div>
    </>
  );
};

export default NavBarRouter;
