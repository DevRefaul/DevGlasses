import React, { createContext, useEffect, useReducer, useState } from "react";
import reducer, { initialState } from "../Reducer/reducer";
import { actionTypes } from "../Reducer/actions";

export const PRODUCT_CONTEXT = createContext("");

const DataContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  useEffect(() => {
    fetch("../../public/glasses.json")
      .then((res) => res.json())
      .then((data) => dispatch({ type: actionTypes.PRODUCTS, payload: data }))
      .catch((err) => console.error(err));
  }, []);

  const value = {
    state,
    dispatch,
  };

  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export default DataContext;
