import React from "react";
import MenuItem from "./MenuItem";

const NavBar = () => {
  return (
    <>
      <div className="container flex justify-between items-center px-[14px] mt-5">
        <svg width="38" height="20" viewBox="0 0 38 20" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.89486 4.10903V19.0599H0V1.69174C0 0.298924 1.59119 -0.495032 2.70406 0.342453L16.4546 10.6903C16.8786 11.0094 17.1279 11.5091 17.1279 12.0396V19.0599H14.2331V12.6415L2.89486 4.10903Z"
            fill="#333333"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.5319 4.10903V19.0599H37.4268V1.69174C37.4268 0.298924 35.8356 -0.495032 34.7227 0.342453L20.9721 10.6903C20.5482 11.0094 20.2988 11.5091 20.2988 12.0396V19.0599H23.1937V12.6415L34.5319 4.10903Z"
            fill="#333333"
          ></path>
        </svg>
        <div className="desktopMenu flex justify-center items-center gap-x-[70px]">
          <MenuItem name="Ecosystem"></MenuItem>
          <MenuItem name="Developer"></MenuItem>
          <MenuItem name="Learn"></MenuItem>
          <MenuItem name="Foundation"></MenuItem>
          <MenuItem name="Community"></MenuItem>
          <MenuItem name="Vote"></MenuItem>
        </div>
      </div>
    </>
  );
};

export default NavBar;
