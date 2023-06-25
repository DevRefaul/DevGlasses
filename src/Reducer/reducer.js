import { actionTypes } from "./actions";

export const initialState = {
  products: [],
  orders: [],
  regularDelivery: [],
  expressDevlivery: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
      case actionTypes.PLACE_ORDER:
          
//           let product = action.payload;
          
//           const updatedProduct = state.orders.map(order => {
//               if (order._id === product._id) {
//                   console.log(order)
//               } else {
//                   console.log(order + "else block")
//               }
//           } )
// // console.log(updatedProduct)

      return {
        ...state,
          orders: [...state.orders, action.payload]
      };
      case actionTypes.REGULAR_DELIVERY:
          
          const regItem = action.payload;
          const removeRegularDeliveryItem = state.orders.filter( order => order._id !== regItem._id)
          
          return {
              ...state,
              regularDelivery: [...state.regularDelivery, action.payload],
              orders : removeRegularDeliveryItem
      };
      case actionTypes.EXPRESS_DELIVERY:
        const expressItem = action.payload;
        const removeExpressDeliveryItem = state.orders.filter( order => order._id !== expressItem._id)
          return {
          ...state,
              expressDevlivery: [...state.expressDevlivery, action.payload],
              orders : removeExpressDeliveryItem
      };
    default:
      return state;
  }
};

export default reducer;
