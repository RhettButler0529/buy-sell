import React from "react";
import "./tableBlock.scss";

function tableBlock({ children, title }) {
  return (
    <div className="table-block-container">
      <header>{title}</header>
      <div className="block-body">{children}</div>
    </div>
  );
}

export default tableBlock;
