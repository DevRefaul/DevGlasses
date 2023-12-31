import React, { useContext } from "react";
import { PRODUCT_CONTEXT } from "../../Contexts/DataContext";
import DeliveryTable from "../../Components/DeliveryTable/DeliveryTable";

const RegularDelivery = () => {
  const { state } = useContext(PRODUCT_CONTEXT);

  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-xl font-semibold my-8 text-center">
        Regular Delivery
      </h2>

      <div>
        <DeliveryTable orders={state?.regularDelivery} />
      </div>
    </div>
  );
};

export default RegularDelivery;
