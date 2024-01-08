// item.js (hoặc tên file tương ứng)
import React from "react";
import { StyleSheet, Text, View ,Image} from "react-native";

function ItemOder({ coffee }) {
   
  return (
    <View style={styles.container}>
      <Image source={{ uri: `data:image/jpeg;base64,${coffee.product.imageData}` }} style={styles.image} />
      <View style={styles.textContainer}>
        <View style={{flex:1,justifyContent:'center'}}>
        <Text style={styles.name}>{coffee.name}</Text>
        <Text style={styles.price}>${(coffee.product.price * coffee.quantity).toFixed(1)} {coffee.price}</Text>
        <Text style={styles.quantity}>Số Lượng: x  {coffee.quantity}</Text>
        </View>
        <View style={{flex:1,justifyContent:'center'}}>
            <Text style={styles.total}>Total: Snow Nghi {coffee.total}</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
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
      price: {
        fontSize: 14,
        color: "green",
      },
      quantity: {
        fontSize: 14,
        color: "blue",
        
      },
      total: {
        fontSize: 14,
        color: "red",
      },
});

export default ItemOder;
