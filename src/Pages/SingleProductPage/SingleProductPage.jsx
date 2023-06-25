import React from "react";
import { useLocation } from "react-router-dom";

const SingleProductPage = () => {
  const location = useLocation();
  const productInfo = location.state.productInfo;

  return <div>this is a single page.</div>;
};

export default SingleProductPage;
