// cartReducer.js
import {SET_TOTAL_PRICE} from './constants';
const initialState = {
    totalPrice: 0,
    // ...other reducer properties
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TOTAL_PRICE':
        return {
          ...state,
          totalPrice: action.totalPrice,
        };
      // Handle other actions if needed
      default:
        return state;
    }
  };
  
  export default cartReducer;
  