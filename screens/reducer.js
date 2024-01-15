import { ADD_TO_CART,REMOVE_FROM_CART,UPDATE_CART_ITEM_QUANTITY,UPDATE_CART, REMOVE_PRODUCT_FROM_CART, SET_TOTAL_PRICE, UPDATE_TOTAL_PRICE } from './constants';
            const initialState = [];
            export const reducer = (state = initialState, action) =>  {
            switch (action.type) {
              case ADD_TO_CART:
                const { product, formattedPrice, quantity,totalPricee  } = action.data;
                // Tạo một bản sao của trạng thái
                const newState = [...state];
                // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
                const existingProductIndex = newState.findIndex(
                  (item) => item.product.id === product.id
                );
                if (existingProductIndex !== -1) {
                  // Sản phẩm có cùng ID đã tồn tại trong giỏ hàng
                  newState[existingProductIndex].quantity += quantity;
                } else {
                  // Sản phẩm chưa tồn tại trong giỏ hàng, thêm vào giỏ hàng
                  newState.push({ product, formattedPrice, quantity,totalPricee });
                }
                return newState;
                case REMOVE_PRODUCT_FROM_CART:
  const productIdToRemove = action.payload;
  // Lọc ra các sản phẩm mà bạn muốn giữ lại trong giỏ hàng
  const updatedCartItems = state.filter(item => item.product.id !== productIdToRemove);

  return updatedCartItems;
                    


                    case UPDATE_CART_ITEM_QUANTITY:
                      const { productId, newQuantity} = action;
                      let totalQuantity = 0;
                      
                      const updatedCart = state.map(item => {
                        if (item.product.id === productId) {
                          const oldQuantity = item.quantity;
                          totalQuantity = oldQuantity + newQuantity;
                          return { ...item, quantity: totalQuantity };
                        }
                        return item;
                      });
                      return updatedCart;
                      case UPDATE_CART:
                        const { productId1, newQuantity1 } = action.payload;
                        return state.map(item => {
                          if (item.product.id === productId1) {
                            // If the item's ID matches the updated product ID, update its quantity.
                            return { ...item, quantity: newQuantity1 };
                          }
                          return item;
                        });

                           case UPDATE_TOTAL_PRICE:
                          return {
                            ...state,
                            totalPricee: action.payload, // Cập nhật giá trị totalPricee từ action.payload
                          };

                      



                    default:
            return state
            }
            }

           