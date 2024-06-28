import React, { useState, createContext } from "react";
import { ELEMENTS } from "../source";

export const MyContext = createContext(null);

const originalZero = () => {
  let numberE = {};
  for (let i = 1; i < ELEMENTS.length + 1; i++) {
    numberE[i] = 0;
  }
  return numberE;
};

export const Clasification = (props) => {
  const [paiting, setPaint] = useState(originalZero());

  const plusPoint = (paitingId) => {
    setPaint((prev) => ({ ...prev, [paitingId]: prev[paitingId] + 1 }));
  };
  const minusPoint = (paitingId) => {
    setPaint((prev) => ({ ...prev, [paitingId]: prev[paitingId] - 1 }));
  };

  const contextValue = {
    plusPoint,
    minusPoint,
    paiting,
  };
  return (
    <div>
      <MyContext.Provider value={contextValue}>
        {props.children}
      </MyContext.Provider>
    </div>
  );
};
