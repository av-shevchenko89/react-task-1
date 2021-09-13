// functional component
import React from "react";

const Button = (props) =>  <button className="btn" onClick={props.onClick}>{props.label}</button>;

export default Button;
