import React from "react";

const AcrossBanner = () => {
  return (
    <div className="banner flex">
      <img src="/image.png" alt="image-banner" />
      <div className="content-banner bg-slate-600 text-white w-full py-[116px] pl-[130px]">
        <h2>
          <span className="text-2xl font-medium">
            The world's first unbiased currency
          </span>
        </h2>
        <div className="w-[470px] text-xl mt-5">
          <p>
            <span>
              Dai is a stable, decentralized currency that does not
              discriminate. Any individual or business can realize the
              advantages of digital money.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcrossBanner;