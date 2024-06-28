import React from "react";

export const ShowFun = (props) => {
  const { id, name, quote, eleImage } = props.data;

  return (
    <div className="container">
      <img src={eleImage} alt="name" />
      <div className="information">
        <p className="nameImg">
          <b>{name}</b>
        </p>
        <p className="quoteImg">
          <b>{quote}</b>
        </p>
      </div>
    </div>
  );
};
