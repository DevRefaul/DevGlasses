import React, { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import reducer, { initialState } from "../../Reducer/reducer";
import { actionTypes } from "../../Reducer/actions";
import { PRODUCT_CONTEXT } from "../../Contexts/DataContext";

const ItemCard = ({ product }) => {
  const { dispatch } = useContext(PRODUCT_CONTEXT);

  return (
    <div className="relative flex flex-col justify-between rounded-2xl w-auto h-full bg-cyan-50 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={product.Image}
          alt={`${product.Name} glass picture`}
          className="rounded-xl"
        />
      </figure>
      <div className="flex flex-col justify-between flex-auto gap-2 py-[1rem] text-center  px-8">
        <>
          <h2 className="text-xl font-semibold font-serif ">{product.Name}</h2>
          <h4 className="text-lg font-medium text-cyan-500 text-center">
            Price : {product.Price}
          </h4>
        </>
        <div className="flex flex-wrap gap-2 justify-between ">
          <button className="px-4 h-10 rounded-lg bg-cyan-400 mt-4 text-white">
            <Link
              to={`/glasses/${product.Name}`}
              state={{ productInfo: product }}
            >
              See Details
            </Link>
          </button>
          <button
            onClick={() =>
              dispatch({
                type: actionTypes.PLACE_ORDER,
                payload: product,
              })
            }
            className="px-4 h-10 rounded-lg bg-cyan-400 mt-4 text-white"
          >
            <Link to={``}>Order Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
