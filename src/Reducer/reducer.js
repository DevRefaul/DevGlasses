import initialState from "./Store";
import {actionTypes } from "./actions";

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.PLACE_ORDER:
          return {
          orders : [...state.orders , action.payload.product]
      };
    case actionTypes.REGULAR_DELIVEY:
      return {};
    case actionTypes.EXPRESS_DELIVEY:
      return {};
    default:
      return state;
  }
};

export default reducer;
