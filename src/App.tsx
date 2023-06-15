import React from "react";
import { Layout, Space } from "antd";
import NavBar from "./layout/NavBar";

import FooterMKD from "./components/footer/FooterMKD";
import HomePage from "./pages/HomePage";
import NavBarRouter from "./layout/NavBarRouter";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header className="layout-style">
          {/* <NavBar></NavBar> */}
          <NavBarRouter></NavBarRouter>
        </Header>
        <Content className="layout-style">
          <HomePage></HomePage>
        </Content>
        <Footer className="layout-style">
          <FooterMKD></FooterMKD>
        </Footer>
      </Layout>
    </>
  );
}

export default App;
