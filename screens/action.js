import {ADD_TO_CART,REMOVE_PRODUCT_FROM_CART,UPDATE_CART_ITEM_QUANTITY,UPDATE_CART,UPDATE_TOTAL_PRICE} from './constants'
export function addToCart(product, formattedPrice, quantity,totalPricee) {
    return {
      type: ADD_TO_CART,
      data: {
        product: product,
        formattedPrice: formattedPrice,
        quantity: quantity,
        totalPricee:totalPricee,
      },
    };
  }
  export const removeProductFromCart = (productId) => {
    return {
      type: REMOVE_PRODUCT_FROM_CART,
      payload: productId, // Dữ liệu bạn muốn gửi với action, trong trường hợp này là ID sản phẩm
    };
  };
export const updateCart = (productId1,newQuantity1) => {
  return {
    type: UPDATE_CART,
    payload: { productId1, newQuantity1 },
  };
};
  


  // action.js
  export const updateCartItemQuantity = (productId, newQuantity) => {
    return {
      type: UPDATE_CART_ITEM_QUANTITY,
      productId,
      newQuantity,
    };
  };


  ;
  export const updateTotalPrice = (totalPrice) => ({
    type: UPDATE_TOTAL_PRICE,
    payload: totalPrice,
  });
