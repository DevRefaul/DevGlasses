import React, { createContext, useEffect, useState } from "react";

export const PRODUCT_CONTEXT = createContext("");

const DataContext = ({ children }) => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    fetch("../../public/glasses.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const value = { products };

  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export default DataContext;
