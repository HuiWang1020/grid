import React from "react";
import { useState, Component } from "react";
import "../../App.css";

export default function Cell1(props) {
  const [color, setColor] = useState("white");

  function handleClick() {
    if (color === "black") {
      setColor("white");
      props.setCount(props.count - 1);
    } else {
      setColor("black");
      props.setCount(props.count + 1);
    }
  }

  return (
    <div
      className="cell1"
      onClick={handleClick}
      style={{ backgroundColor: color }}
    ></div>
  );
}
