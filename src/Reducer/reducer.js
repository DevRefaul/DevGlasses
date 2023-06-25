import { actionTypes } from "./actions";

export const initialState = {
  products: [],
  orders: [],
  expressDevliver: [],
  regularDelivery: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
      case actionTypes.PLACE_ORDER:
      return {
        ...state,
          orders: [...state.orders, action.payload]
      };
    case actionTypes.REGULAR_DELIVERY:
      return {};
    case actionTypes.EXPRESS_DELIVERY:
      return {};
    default:
      return state;
  }
};

export default reducer;
