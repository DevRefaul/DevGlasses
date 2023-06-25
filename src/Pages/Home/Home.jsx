import React, { useEffect, useState } from "react";
import ItemCard from "../../Components/ItemCard/ItemCard";
import { getAllGlasses } from "../../Utils/utils";

const Home = () => {
  const [allProducts, setAllProducts] = useState({});

  useEffect(() => {
    const allItems = async () => {
      const items = await getAllGlasses();
      setAllProducts(items);
      return;
    };
    allItems();
  }, []);

  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-2xl font-semibold font-serif my-12 text-center">
        {allProducts.Title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {allProducts.map((product) => (
          <ItemCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
