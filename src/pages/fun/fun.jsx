import React from "react";
import { Link } from "react-router-dom";
import { FUNNY } from "../../assests";
import { ShowFun } from "./showFun";
import "./fun.css";

export const Fun = () => {
  return (
    <div className="mainContainer">
      {FUNNY.map((meme) => (
        <ShowFun data={meme} />
      ))}
    </div>
  );
};
