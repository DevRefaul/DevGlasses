import React, { useContext } from "react";
import { PRODUCT_CONTEXT } from "../../Contexts/DataContext";
import OrdersTable from "../../Components/OrdersTable/OrdersTable";

const AllOrders = () => {
  const { state } = useContext(PRODUCT_CONTEXT);

  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-xl font-semibold my-8 text-center">All Orders</h2>

      <div>
        <OrdersTable />
      </div>
    </div>
  );
};

export default AllOrders;
