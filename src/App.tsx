import React from "react";
import { Layout, Space } from "antd";
import NavBar from "./layout/NavBar";
import Introduce from "./components/overview/Introduce";
import AcrossBanner from "./components/overview/AcrossBanner";
import OneColumn from "./components/overview/OneColumn";
import Community from "./components/overview/Community";
import FooterMKD from "./components/overview/FooterMKD";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header className="layout-style">
          <NavBar></NavBar>
        </Header>
        <Content className="layout-style">
          <Introduce></Introduce>
          <AcrossBanner></AcrossBanner>
          <OneColumn></OneColumn>
          <Community></Community>
        </Content>
        <Footer className="layout-style">
          <FooterMKD></FooterMKD>
        </Footer>
      </Layout>
    </>
  );
}

export default App;
