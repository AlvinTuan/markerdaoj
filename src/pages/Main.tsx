import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Ecosystem from "./Ecosystem";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/ecosystem" element={<Ecosystem></Ecosystem>}></Route>
    </Routes>
  );
};

export default Main;
