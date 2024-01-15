// store.js
import { createStore } from 'redux';

// Action types
const SWITCH_SCREEN = 'SWITCH_SCREEN';

// Initial state
const initialState = {
  activeScreen: 'home', // Mặc định là home khi khởi chạy ứng dụng
};

// Reducer
const screenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_SCREEN:
      return { ...state, activeScreen: action.screen };
    default:
      return state;
  }
};

// Action creators
export const switchScreen = (screen) => {
  return { type: SWITCH_SCREEN, screen };
};

// Create store
const store = createStore(screenReducer);

export default store;
