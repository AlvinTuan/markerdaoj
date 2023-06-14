import React from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";

export const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://docs.makerdao.com/"
      >
        Documentation
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.comhttps://docs.makerdao.com/build/dai.js"
      >
        Dai.js
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/makerdao/developerguides"
      >
        Developer Guides
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://immunefi.com/bounty/makerdao/"
      >
        Bug Bounty
      </a>
    ),
  },
];

interface Attribute {
  href: string;
  name: string;
}

const MenuItem = ({ href, name }: Attribute) => {
  return (
    <>
      <a href={`${href}`} className="menu-item">
        {name}
      </a>
    </>
  );
};

export default MenuItem;
