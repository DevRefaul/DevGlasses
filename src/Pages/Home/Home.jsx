import React, { useContext, useEffect, useReducer, useState } from "react";
import ItemCard from "../../Components/ItemCard/ItemCard";
import { PRODUCT_CONTEXT } from "../../Contexts/DataContext";

const Home = () => {
  const { products } = useContext(PRODUCT_CONTEXT);

  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-2xl font-semibold font-serif my-12 text-center">
        {products.Title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products?.Glasses?.map((product) => (
          <ItemCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
