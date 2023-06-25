import React, { useContext } from "react";
import "./OrdersTable.css";
import { PRODUCT_CONTEXT } from "../../Contexts/DataContext";

const OrdersTable = () => {
  const { state } = useContext(PRODUCT_CONTEXT);

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th className="text-center">Items Name</th>
            <th className="text-center">Items Price</th>
            <th className="text-center">Items Qunatity</th>
            <th className="text-center">Select Delivery Method</th>
          </tr>

          {state.orders.map((order) => (
            <tr key={order._id}>
              <td>{order.Name}</td>
              <td>{order.Price}</td>
              <td>{order?.Qunatity ? order.quantity : 1}</td>
              <td className="flex justify-center">
                <button className="px-6 py-2 bg-cyan-200 rounded-lg mx-2">
                  Regular Delivery
                </button>
                <button className="px-6 py-2 bg-green-200 rounded-lg mx-2">
                  Express Delivery
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default OrdersTable;
