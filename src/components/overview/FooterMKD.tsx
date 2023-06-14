import React from "react";
import { Row, Col } from "antd";

const FooterMKD = () => {
  return (
    <section>
      <div className="w-full grid grid-cols-5 mt-[150px] py-16 px-[347px] ">
        <div>
          <h5>
            <span className="font-semibold">Resources</span>
          </h5>
          <ul className="footer-links mt-2 text-xs">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Contribute</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>col-2</div>
        <div>col-3</div>
        <div>col-4</div>
        <div>col-5</div>
      </div>
    </section>
  );
};

export default FooterMKD;
