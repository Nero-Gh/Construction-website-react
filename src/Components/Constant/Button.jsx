import React from "react";
import "./_button.scss";

const Button = (props) => {
  return <button className="btn">{props.children}</button>;
};

export default Button;
