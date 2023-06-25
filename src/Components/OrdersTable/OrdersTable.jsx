import React, { useContext } from "react";
import "./OrdersTable.css";
import { PRODUCT_CONTEXT } from "../../Contexts/DataContext";
import { actionTypes } from "../../Reducer/actions";
import { Toaster, toast } from "react-hot-toast";

const OrdersTable = ({ orders }) => {
  const { dispatch } = useContext(PRODUCT_CONTEXT);

  return (
    <>
      <Toaster />
      <table>
        <tbody>
          <tr>
            <th className="text-center">Items Name</th>
            <th className="text-center">Items Price</th>
            <th className="text-center">Items Qunatity</th>
            <th className="text-center">Select Delivery Method</th>
          </tr>

          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.Name}</td>
              <td>{order.Price}</td>
              <td>{order?.Qunatity ? order.quantity : 1}</td>
              <td className="flex justify-center">
                <button
                  onClick={() => {
                    dispatch({
                      type: actionTypes.REGULAR_DELIVERY,
                      payload: order,
                    });
                    return toast.success("Added To Regular Delivery");
                  }}
                  className="px-6 py-2 bg-cyan-200 rounded-lg mx-2"
                >
                  Regular
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: actionTypes.EXPRESS_DELIVERY,
                      payload: order,
                    });
                    return toast.success("Added To Express Delivery");
                  }}
                  className="px-6 py-2 bg-green-200 rounded-lg mx-2"
                >
                  Express
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
