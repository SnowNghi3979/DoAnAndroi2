import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Image, FlatList, Alert, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

const PaymentMethod = ({ route, navigation }) => {
  const { product, quantity, totalPrice } = route.params;
  const { productsForPurchase, totalPrice1 } = route.params;
console.log(productsForPurchase)
const onPressSuccess = () => {
  navigation.navigate("Success");
};

  const handlePlaceOrder = () => {
   
    
    if (userInfo && (productsForPurchase || product)) {
      const allProducts = productsForPurchase ? productsForPurchase : [product];

      const productData = allProducts.map((prod) => {
        return {
          idUser: userInfo.id,
          idProduct: productsForPurchase ? prod.product.id : product.id,
          currency:"USD",
          method: isChecked1 ? 'paypal' : 'Thanh Toán Khi Nhận Hàng',
          quantity: productsForPurchase ? prod.quantity : quantity,
          description: "Mua Hang Shop Snow Nghi",
          "intent": "sale",
          amount: productsForPurchase ? totalPrice1 : totalPrice,
          status: 'VERIFIED',
        };
      });
  


      console.log('Product Data:', productData);
      fetch('http://192.168.180.108:9089/api/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
       
      })
      
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then((responseData) => {
      
          console.log("Order placed:", responseData);
          const paymentUrl = responseData.approvalUrl;
  
          navigation.navigate("VnPayPayment", { paymentUrl });
        
        })
        .catch((error) => {
          console.error('Error placing order:', error);
          Alert.alert('Error', 'There was an error processing your payment. Please try again.');
        });
    } else {
      Alert.alert('Error', 'User information or products are missing. Please select products before payment.');
    }
  };


 

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleIconPress1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleIconPress2 = () => {
    setIsChecked2(!isChecked2);
  };

  const userInfo = useSelector((state) => state.user.user);

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}} >
      {/* {product ? ( // Kiểm tra nếu tồn tại thông tin sản phẩm
        <React.Fragment>
          <Text>{product.name}</Text>
          <Text>Quantity: {quantity}</Text>
          <Text>Total Price: {totalPrice}</Text>
        </React.Fragment>
      ) : selectedProducts ? ( // Kiểm tra nếu tồn tại thông tin giỏ hàng
        selectedProducts.map((product, index) => (
          <View key={index}>
            <Text>Selected Product: {product.name}</Text>
            <Text>Total Price: {totalPrice1}</Text>
          </View>
        ))
      ) : (
        <Text>No data available</Text>
      )}
      <TouchableOpacity onPress={handleCancelPayment}>
        <Text>Cancel Payment</Text>
      </TouchableOpacity> */}
      <View style={{flex:0.1,backgroundColor:'white',justifyContent:'center'}}>
        <View style={{alignItems:'center'}}>
        <Text style={{fontSize:19,fontWeight:'700'}}>Yêu Cầu</Text>
        </View>
      </View>
  <View style={{ borderBottomColor: 'grey', borderBottomWidth: 0.5, marginVertical: 10,opacity:0.5 }} />
<View style={{flex:0.2,marginLeft:10,backgroundColor:'white'}}>
    <View style={{flexDirection:'row'}}>
      
        {/* <Icon style={{top:-1}} name="location-on" size={21} color="#900" /> */}
    <Text style={{fontWeight:'500',fontSize:19}}>{userInfo.name}</Text>
    
    <Text style={{marginLeft:20,fontSize:19,fontWeight:'300'}}>(+84) {userInfo.phone}</Text>
    </View>
    <View style={{marginTop:15,marginLeft:10}}>
    </View>
</View>



{/* <View style={styles.container}>
      <View style={[styles.dash, styles.green]} />
      <View style={[styles.dash, styles.yellow]} />
      <View style={[styles.dash, styles.green]} />
      <View style={[styles.dash, styles.yellow]} />
      <View style={[styles.dash, styles.green]} />
      <View style={[styles.dash, styles.yellow]} />
      <View style={[styles.dash, styles.green]} />
      <View style={[styles.dash, styles.yellow]} />
      <View style={[styles.dash, styles.green]} />
      <View style={[styles.dash, styles.yellow]} />
    </View> */}


    <View  style={{flex:1.1,marginTop:20}}>
        <View style={{flex:0.55}}>
{product ? ( // Kiểm tra nếu tồn tại thông tin sản phẩm
        <React.Fragment>
          <View >
            <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',flex:1}}>
              <Image source={{ uri: `data:image/jpeg;base64,${product.imageData}` }} style={{width: 110,height: 110,marginLeft:10,marginRight:10} } />
         <View style={{flexDirection:'column'}}>
           <View  style={{justifyContent:'flex-start',flex:1}}>
            <Text>{product.name}</Text>
            </View>
            <View style={{justifyContent:'flex-end',flex:1,top:-40}}>
            <Text style={{fontSize:17,fontWeight:'200'}}>Giá: {totalPrice} $</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{color:'red',fontWeight:'400'}}>Số Lượng Trong Kho:</Text>
           <Text >{product.qty}</Text>
           </View>

            </View>
            
            </View>
           
            </View> 
            
        
            

            
            <View style={{top:0, alignItems: 'flex-end',flex:1,justifyContent:'flex-end',marginRight:10 }}>
                <View style={{flexDirection:'column'}}>
           <View style={{alignItems:'flex-end',alignItems:'center'}}>
           <View style={{ flexDirection: 'row', alignItems: 'center' ,left:5}}>
           <Text style={{ padding: 0, paddingLeft: 0, paddingRight: 0, fontSize: 12, textAlign: 'center', top: -40, lineHeight: 18 }}>
  Số Lượng: x{quantity}
</Text>
 
</View>

         

           </View>
           </View>
           </View>

         

           </View>
           <View style={{ borderBottomColor: 'grey', borderBottomWidth: 0.5, marginVertical: 10,opacity:0.5 }} />

          </View>
        </React.Fragment>
      ) : productsForPurchase ? ( // Kiểm tra nếu tồn tại thông tin giỏ hàng
  <FlatList
  data={productsForPurchase}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <View style>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: `data:image/jpeg;base64,${item.product.imageData}` }} style={{ width: 110, height: 110, marginLeft: 10, marginRight: 10 }} />
        <View style={{ flex: 1 }}>
          <Text>{item.product.name}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 17, fontWeight: '200' }}>{item.product.price * item.quantity} $ </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            
              <Text style={{ padding: 5, paddingLeft: 10, paddingRight: 10, fontSize: 18, textAlign: 'center' }}>x{item.quantity}</Text>
              
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: 'red', fontWeight: '400' }}>Số Lượng Trong Kho:</Text>
            <Text>{item.product.qty}</Text>
          </View>

          
        </View>
      </View>
      <View style={{ borderBottomColor: 'grey', borderBottomWidth: 0.5, marginVertical: 10,opacity:0.5 }} />
    </View>
  )}
/>

      ) : (
        <Text>Cần Chọn Sản Phẩm Trước Khi Thanh Toán</Text>
      )}
      </View>
  
<View style={{flex:0.35,justifyContent:'center',marginLeft:10}}>
<View style={{flexDirection:'column'}}>
    <View style={{marginLeft:5}}>
    <Text style={{fontWeight:'500',fontSize:16.9}}>Vận chuyển tiêu chuẩn</Text>

    </View>
    <View style={{flexDirection:'row',marginTop:10,marginBottom:20}}>
    <Icon name="directions-car" size={21} color="#900" />
<Text>Từ : {userInfo.address}</Text>

    </View>
    <View  style={{flexDirection:'row'}}>
    <Icon style={{top:-1}} name="schedule" size={21} color="#900" />
<Text>
    Ngày giao dự kiến: Nov 5 - Nov 7
</Text>
    </View>
</View>


</View>

    </View>
{/* chọn phương thức thanh toán  */}
<View style={{ flex: 0.5, backgroundColor: 'white', marginLeft:10 }}>
      <View style={{ borderBottomColor: 'grey', borderBottomWidth: 10, marginVertical: 10, opacity: 0.05, top: -15 }} />
      <View>
        <Text style={{fontWeight:'500',fontSize:16.9}}>Phương thức thanh toán</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center',}}>
            <View style={{ flexDirection: 'row',alignItems: 'center'  }} >
          <Image source={require('../assets/th.jpg')} style={{ width: 50, height: 50 }} resizeMode="contain" />
          <Text style={{ marginLeft: 10, fontWeight: '400' }}>Thanh Toán PayPal</Text>
          </View>
          <View style={{left:120}}>
          <TouchableOpacity onPress={handleIconPress1}>
            {isChecked1 ? (
              <Icon name="check-circle" size={21} color="green" />
            ) : (
              <Icon name="radio-button-unchecked" size={21} color="red" />
            )}
          </TouchableOpacity>

          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../assets/images.jpg')} style={{ width: 50, height: 50 }} resizeMode="contain" />
          <Text style={{ marginLeft: 10, fontWeight: '400' }} >Thanh Toán Khi Nhận Hàng</Text>
          <View style={{left:70}}>
          <TouchableOpacity onPress={handleIconPress2}>
            {isChecked2 ? (
              <Icon name="check-circle" size={21} color="green" />
            ) : (
              <Icon name="radio-button-unchecked" size={21} color="red" />
            )}
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    <View style={{flex:0.4,backgroundColor:'white',marginTop:10,marginLeft:10,marginRight:10}}>
    <View style={{ borderBottomColor: 'grey', borderBottomWidth: 0.5, marginVertical: 10,opacity:0.5 }} />
<View style={{flexDirection:'row'}}>
    <View style={{flex:1,alignItems:'flex-start',top:-5}}>
    <Text style={{fontWeight:'700',fontSize:20}}>Tổng:</Text>
    </View>
    <View style={{flex:1,alignItems:'flex-end'}}>
{product ? (
    <Text style={{fontWeight:'700',fontSize:15}}> {totalPrice}$</Text>
  ) : productsForPurchase ? (
    <Text  style={{fontWeight:'700',fontSize:15}}> {totalPrice1}$</Text>
  ) : (
    <Text>0 VND</Text>
  )}
  </View>
  
</View>
<View>
<TouchableOpacity onPress={handlePlaceOrder} style={{alignItems:'center' ,height:50,justifyContent:'center',marginTop:10,backgroundColor:'red',borderRadius:5}}>
<Text style={{fontSize:20,color:'white'}} onPress={onPressSuccess} >Đặt hàng </Text>
</TouchableOpacity>
</View>
    </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: '100%', // Độ dài của đường kẻ ngang
   flex:0,
//    backgroundColor:'yellow'
  },
  dash: {
    width: 33, // Độ dài mỗi nét đứt
    height: 2, // Độ dày của nét đứt
  },
  green: {
    backgroundColor: '#00FFFF',
  },
  yellow: {
    backgroundColor: '#FF3300',
  },
});


export default PaymentMethod;
