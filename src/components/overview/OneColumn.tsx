import React, { Children } from "react";
import OneColumnItem from "./OneColumnItem";
import FinancialImage from "../svg-image/FinancialImage";
import DecentralizedImage from "../svg-image/DecentralizedImage";
import EcosystemImage from "../svg-image/EcosystemImage";

const OneColumn = () => {
  return (
    <>
      <div className="one-column-container w-[1046px] ml-[393px] mt-32">
        <OneColumnItem
          title="Financial freedom with no volatility"
          describe="A price-stable currency that you control. Generate Dai on your
              terms, instantly."
          toLink="Read the whitepaper"
          img={<FinancialImage></FinancialImage>}
        ></OneColumnItem>
        <OneColumnItem
          title="Decentralized governance"
          describe="A community of MKR token holders govern the Maker Protocol, the smart contracts that power Dai."
          toLink="Learn more"
          img={<DecentralizedImage></DecentralizedImage>}
        ></OneColumnItem>
        <OneColumnItem
          title="A growing ecosystem"
          describe="Over 400 apps and services have integrated Dai, including wallets, DeFi platforms, games and more."
          toLink="Explore apps"
          img={<EcosystemImage></EcosystemImage>}
        ></OneColumnItem>
      </div>
    </>
  );
};

export default OneColumn;
