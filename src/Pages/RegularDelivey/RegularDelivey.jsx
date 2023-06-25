import React, { useContext } from "react";
import { PRODUCT_CONTEXT } from "../../Contexts/DataContext";
import DeliveryTable from "../../Components/DeliveryTable/DeliveryTable";

const RegularDelivey = () => {
  const { state } = useContext(PRODUCT_CONTEXT);

  console.log(state);
  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-xl font-semibold my-8 text-center">
        Regular Delivey
      </h2>

      <div>
        <DeliveryTable orders={state?.regularDelivery} />
      </div>
    </div>
  );
};

export default RegularDelivey;
