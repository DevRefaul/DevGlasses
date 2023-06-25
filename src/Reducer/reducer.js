import initialState from "./Store";
import { EXPRESS_DELIVEY, PLACE_ORDER, REGULAR_DELIVEY } from "./actions";

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case PLACE_ORDER:
          return {
          orders : [...state.orders , action.payload.product]
      };
    case REGULAR_DELIVEY:
      return {};
    case EXPRESS_DELIVEY:
      return {};
    default:
      return state;
  }
};

export default reducer;
