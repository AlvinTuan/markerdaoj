import React from "react";
import Introduce from "../components/overview/Introduce";
import OneColumn from "../components/overview/OneColumn";
import Community from "../components/overview/Community";

const HomePage = () => {
  return (
    <>
      <Introduce></Introduce>
      <OneColumn></OneColumn>
      <Community></Community>
    </>
  );
};

export default HomePage;
