import React from "react";
import ItemCard from "../../Components/ItemCard/ItemCard";

const Home = () => {
  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-xl font-bold  text-center">This is Home page</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
};

export default Home;
