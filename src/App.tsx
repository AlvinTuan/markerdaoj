import React from "react";
import { Layout, Space } from "antd";
import NavBar from "./layout/NavBar";

import FooterMKD from "./components/footer/FooterMKD";
import HomePage from "./pages/HomePage";
import NavBarRouter from "./layout/NavBarRouter";
import { Route, Routes } from "react-router-dom";
import Ecosystem from "./pages/Ecosystem";
import Main from "./pages/Main";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header className="layout-style">
          <NavBarRouter></NavBarRouter>
        </Header>
        <Content className="layout-style">
          <Main></Main>
        </Content>
        <Footer className="layout-style">
          <FooterMKD></FooterMKD>
        </Footer>
      </Layout>

      {/* <Route path="/ecosystem" element={<Ecosystem></Ecosystem>}></Route> */}
    </>
  );
}

export default App;
