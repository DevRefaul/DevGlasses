import React, { useContext } from "react";
import { PRODUCT_CONTEXT } from "../../Contexts/DataContext";
import DeliveryTable from "../../Components/DeliveryTable/DeliveryTable";

const ExpressDelivery = () => {
  const { state } = useContext(PRODUCT_CONTEXT);

  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-xl font-semibold my-8 text-center">
        Express Delivery
      </h2>

      <div>
        <DeliveryTable orders={state?.expressDevlivery} />
      </div>
    </div>
  );
};

export default ExpressDelivery;
