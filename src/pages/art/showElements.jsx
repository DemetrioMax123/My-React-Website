import React, { useContext } from "react";
import { MyContext } from "../clasification";

export const ShowElements = (props) => {
  const { id, name, quote, eleImage } = props.data;
  const { plusPoint, minusPoint, paiting } = useContext(MyContext);
  return (
    <div className="artContainer">
      <img src={eleImage} alt="name" />
      <div className="info">
        <p>
          <b>{name}</b>
        </p>
        <p>
          <b>{quote}</b>
        </p>
      </div>
      <div className="clasifications">
        <button className="plusPoint" onClick={() => minusPoint(id)}>
          -
        </button>
        <input type="text" className="barOfPoints" value={paiting[id]} />
        <button className="minusPoint" onClick={() => plusPoint(id)}>
          +
        </button>
      </div>
      <p className="ratingBtn">
        <b>Rating</b>
      </p>
    </div>
  );
};
