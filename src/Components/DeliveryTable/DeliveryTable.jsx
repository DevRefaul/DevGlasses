import React from "react";
import "../OrdersTable/OrdersTable.css";

const DeliveryTable = ({ orders }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th className="text-center">Items Name</th>
            <th className="text-center">Items Price</th>
            <th className="text-center">Items Qunatity</th>
            <th className="text-center">Payout</th>
          </tr>

          {orders?.map((order) => (
            <tr key={order._id}>
              <td>{order.Name}</td>
              <td>{order.Price}</td>
              <td>{order?.Qunatity ? order.quantity : 1}</td>
              <td className="flex justify-center">
                <button className="px-6 py-2 bg-cyan-300 rounded-lg mx-2">
                  Pay_Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DeliveryTable;
