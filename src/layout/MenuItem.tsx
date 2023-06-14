import React from "react";

interface Attribute {
  name: string;
}

const MenuItem = ({ name }: Attribute) => {
  return (
    <>
      <a href="#" className="menu-item">
        {name}
      </a>
    </>
  );
};

export default MenuItem;
