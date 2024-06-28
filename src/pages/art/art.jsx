import React from "react";
import { ELEMENTS } from "../../source";
import { ShowElements } from "./showElements";
import "./art.css";

export const Art = () => {
  return (
    <div>
      <h2 className="title">Art Gallery</h2>
      <div className="drawings">
        {ELEMENTS.map((element) => (
          <ShowElements data={element} />
        ))}
      </div>
    </div>
  );
};
