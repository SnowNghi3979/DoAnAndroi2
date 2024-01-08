import React, { useState,useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { Animated } from 'react-native';

import { useDispatch } from 'react-redux'; 
import { addToCart } from "./action";



const ProductDetail = ({ route  }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false); // Theo dõi xem ảnh đã tải xong chưa
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const price = parseInt(product.price.replace(/[^\d]/g, ''), 10);

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
  const formattedPrice = totalPrice.toLocaleString('vi-VN');

  

  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    const animationListener = animatedValue.addListener((value) => {
      console.log('Animated value updated:', value);
    });

    return () => {
      animatedValue.removeListener(animationListener);
    };
  }, [animatedValue]);

  const handleBackButtonPress = () => {
    if (navigation.canGoBack()) {
      navigation.navigate('Home');
      return true; // Chặn sự kiện mặc định của nút Back
    }
    return false;
  };
  





 

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonPress);
    };
  }, [navigation]);



 
  const handleAddToCart =(product)=>{
    dispatch(addToCart (product))
    navigation.navigate('Cart');
  }

  
  return (
    <View style={styles.container}>
     

<TouchableOpacity onPress={handleBackButtonPress}>
        <Image
          style={styles.backButton}
          source={require("../assets/arrow-back-ios-24px.png")}
        />
      </TouchableOpacity>

      


      <Image
         style={styles.placeholderImage}
        source={product.image}
         // Đặt imageLoaded thành true khi ảnh đã tải xong
      />
     
      <View style={styles.aa}>
        <Text style={styles.productName}>{product.name}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantity}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.productRating}>
        <Text style={styles.rating}>{product.rating}</Text>
        <Image style={styles.starsIcon} source={require("../assets/stars.png")} />
      </View>

      <Text style={styles.productDescription}>{product.description}</Text>
   <View style={{marginTop:20}}>
    <Text style={{fontSize: 15}}>Thành Phần :</Text>
     <Text style={{fontSize: 17,top:10}}>{product.thanhphan}</Text>

   </View>

      <View style={{ flexDirection: "row", marginTop: 80 }}>
        <Text style={{ fontSize: 20 }}>Tổng Giá: </Text>
        <TouchableOpacity style={styles.orderButton} >
          <Text style={styles.orderButtonText}  onPress={()=>handleAddToCart(product)}>Đặt Hàng</Text>
        </TouchableOpacity>
      </View>
      <View style={{ top: -25 }}>
        <Text style={styles.productPrice}>IDR {formattedPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carbutton:{
    position: "absolute",
    top: 30, // Vị trí từ trên xuống
    right:10, // Vị trí từ trái sang phải
     // Để nút "Back" hiển thị trên cùng
    zIndex:9999,
     width: 50,
     height: 45,
     tintColor: 'black',
     borderColor: 'black',
     borderWidth: 2,
     borderRadius:10,
     
  },

  backButton: {
    position: "absolute",
    top: 30, // Vị trí từ trên xuống
    left: 10, // Vị trí từ trái sang phải
     // Để nút "Back" hiển thị trên cùng
    zIndex:9999,
     width: 40,
     height: 30,
     
   
  },
  productPrice: {
    fontSize: 20,
  },
  productRating: {
    flexDirection: "row",
    alignItems: "center",
  },
  aa: {
    flexDirection: "row",
  },
  container: {
    flex: 2,
    padding: 16,
  },
  placeholderImage: {
    
    width: "100%",
    height: 400,
    marginBottom: 16,
    marginTop: 20,
    resizeMode: 'cover',
    borderRadius:25,
    zIndex:-9999,
  },
  productImage: {
    width: "100%",
    height: 400,
    marginBottom: 16,
    marginTop: 20,
    borderRadius:20,
  
  },
  productName: {
    fontSize: 25,
    color: "black",
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_100,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 150,
  },
  quantityButton: {
    fontSize: 18,
    color: "gray",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
  },
  quantityText: {
    fontSize: 15,
    color: "black",
    marginRight: 5,
    marginLeft: 5,
  },
  productDescription: {
    fontSize: 16,
    color: "gray",
    marginTop: 30,
  },
  orderButton: {
    backgroundColor: "#ffc700",
    marginLeft: 170,
    marginTop: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: "35%",
  },
  orderButtonText: {
    fontSize: 18,
    color: "black",
  },
});

export default ProductDetail;
