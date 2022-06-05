import React from "react";
import Input from "../input/input.component";
import "./show.scss";

function Show({ title, value, onChange, ...inputProps }) {
  return (
    <div className="address">
      <p>{title}</p>
      {typeof onChange === "function" ? (
        <input value={value} onChange={onChange} {...inputProps} />
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}

export default Show;
