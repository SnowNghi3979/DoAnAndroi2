// userReducer.js

const initialState = {
  user: null, // Thông tin người dùng
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload, // Lưu thông tin người dùng sau khi đăng nhập
      };
    default:
      return state;
  }
};
