import React from "react";

const ItemCard = () => {
  return (
    <div className="relative flex flex-col rounded-2xl w-auto h-auto bg-cyan-50 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="flex flex-col flex-auto gap-2 py-[2rem] text-center  px-8">
        <h2 className="text-xl font-semibold font-serif">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="flex flex-wrap gap-2 justify-end">
          <button className="px-4 h-10 rounded-lg bg-cyan-400 mt-8 text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
