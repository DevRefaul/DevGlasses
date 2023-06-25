import React, { useContext } from "react";
import { PRODUCT_CONTEXT } from "../../Contexts/DataContext";

const AllOrders = () => {
  const { state } = useContext(PRODUCT_CONTEXT);

  return (
    <div>
      <h2>This is AllOrders page</h2>
    </div>
  );
};

export default AllOrders;
