import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view"; // Thêm import này vào

import { v4 as uuidv4 } from "uuid";
import ItemOder from "./ItemOder";
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart } from "./action";

function Cart({ route, navigation }) {
  const dispatch = useDispatch();

  const handleProceedToCheckout = () => {
    const totalPrice1 = totalSum
    navigation.navigate('PaymentMethod', { productsForPurchase, totalPrice1 });
    // navigation.navigate('VnPayPayment', { totalPrice });
  };
 
  const productsForPurchase= useSelector((state) =>state.reducer)
  
  
  const removeFromCart = (productId) => {
    dispatch(removeProductFromCart(productId));
  };

  const cartData= useSelector((state) =>state.reducer)
  const totalSum = cartData.reduce((sum, item) => {
    return sum + item.product.price * item.quantity;
  }, 0);


  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems:'center',marginBottom:20}}>
      <Text  style={{fontSize:20,fontWeight:'600'}}>Giỏ Hàng</Text>
      </View>
      <View style={styles.content}>
        <SwipeListView
          data={cartData}
          renderItem={(data, rowMap) => (
            <View style={styles.container1}>
            <Image source={{ uri: `data:image/jpeg;base64,${data.item.product.imageData}` }} style={styles.image} />
            <View style={styles.textContainer}>
              <View style={{flex:1,justifyContent:'center'}}>
              <Text style={styles.name}>{data.item.product.name.length > 11 ? `${data.item.product.name.substring(0, 11)}...` : data.item.product.name}</Text>
              <Text style={styles.price1}>${(data.item.product.price).toFixed(1)} {data.item.price}</Text>
              <Text style={styles.quantity}>Số Lượng:  x{data.item.quantity}</Text>
              </View>
              <View style={{flex:1,justifyContent:'center'}}>
                  <Text style={styles.total}>Tổng cộng: {(data.item.product.price * data.item.quantity).toFixed(1)} {data.item.price}$</Text></View>
            </View>
          </View>
          )}
        
          renderHiddenItem={(data, rowMap) => (
            
         
            <TouchableOpacity
            style={styles.backRightBtn} 
            onPress={() => removeFromCart(data.item.product.id)}
            >
             
              <View  style={styles.backTextWhite}>
                <AntDesign name="delete" size={26} color="#FFF" />
              </View>
            
            </TouchableOpacity>
          )}
          rightOpenValue={-75}
          swipeToOpenPercent={75} // Chỉ định phần trăm cần để mở mục phần ẩn
          keyExtractor={(item) => item.key}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.price}>
          <Text style={styles.totalPrice}>Thành tiền</Text>
          <Text style={styles.byn900}>{totalSum}</Text>
        </View>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={handleProceedToCheckout}
        >
          <View style={styles.button}>
            <Ionicons name="cart-outline" size={25} color="#FFF" />
            <Text style={styles.next}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    backgroundColor: 'red',
    right: 0,
    borderRadius:20,
    padding:10,
    height:92
  },
 
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
   
  },
  rightAction: {
    backgroundColor: "red",
   
    flex: 1,
    borderRadius:20,
    width:75,
    
   
  },
  BTNrightAction: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 5,
    width: 75,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  price: {
    alignItems: "flex-start",
  },
  totalPrice: {
    fontSize: 16,
  },
  byn900: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  button: {
    backgroundColor: "pink",
    flexDirection: "row",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  next: {
    color: "#FFF",
    marginLeft: 10,
  },







  container1: {
    flexDirection: "row",
    backgroundColor:'#F0FFF0',
   padding:10,
    borderRadius:20,
    marginBottom:5
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
    borderRadius:20,
  
    padding:10,
  },
  textContainer: {
    flexDirection: "row",
justifyContent: "space-between", // Đặt justify-content để căn giữa hai phần tử con
flex: 1, // Đặt flex để chia đều khoảng trống giữa hai phần tử con
    

  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price1: {
    fontSize: 14,
    color: "pink",
  },
  quantity: {
    fontSize: 14,
    color: "blue",
    
  },
  total: {
    fontSize: 14,
    color: "black",
  },





});

// Dữ liệu mẫu cho danh sách cà phê

export default Cart;
