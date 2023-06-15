import React from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
interface Attribute {
  href: string;
  name: string;
}

const MenuItem: React.FC<Attribute> = ({ href, name }) => {
  return (
    <>
      <a href={`${href}`} className="menu-item">
        {name}
      </a>
    </>
  );
};

export default MenuItem;
