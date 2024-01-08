
import {View, SafeAreaView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './colors';

import React, { useState,useEffect } from "react";


import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { Animated } from 'react-native';

import { useDispatch, useSelector } from 'react-redux'; 
import { addToCart, updateCartItemQuantity } from "./action";

const DetailsScreen = ({ route}) => {
  
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const base64Image = product.imageData;
  const price = parseFloat(product.price);
  

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const totalPrice = price * quantity;

  // Hiển thị giá tiền với phần phân cách hàng nghìn
  const formattedPrice = totalPrice

  const totalPricee=0.0

  const animatedValue = new Animated.Value(0);


  const handleBuy = () => {
    // Điều hướng sang trang chọn phương thức thanh toán và truyền thông tin sản phẩm đã mua
    navigation.navigate('PaymentMethod', { product, quantity, totalPrice });
  };

  
  

  
  

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={28} />
      </View>
      <View style={style.imageContainer}>
        <Image  source={{ uri: `data:image/jpeg;base64,${base64Image}` }} // Sử dụng URI từ dữ liệu API
              style={{ width: 380, height: 360,borderRadius:10 }} />
      </View>
      <View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
            
          }}>
         
          <Text style={style.rating}>{product.rating}</Text>
       
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{product.name}</Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 10,
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              ${formattedPrice}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold',color:'red'}}>Chi tiết</Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}>
          {product.description}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity style={style.borderBtn} onPress={decreaseQuantity}>
                <Text style={style.borderBtnText}>-</Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
               {quantity}
              </Text>
              <TouchableOpacity style={style.borderBtn} onPress={increaseQuantity}>
                <Text style={style.borderBtnText}>+</Text>
              </TouchableOpacity>
            </View>
            {/* onPress={() => handleAddToCart()} */}
            <TouchableOpacity style={style.buyBtn}  onPress={handleBuy}>
              <Text
                style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
              Mua hàng
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
    rating:{
marginRight:10,  
  },
  header: {
    paddingHorizontal: 20,
    marginTop:-20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: 'pink', // Thay đổi màu thành hồng
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  
  priceTag: {
    backgroundColor: 'pink',
    width: 100,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default DetailsScreen;