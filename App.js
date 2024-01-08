const Stack = createStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import { useFonts } from "expo-font";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import DetailsScreen from "./screens/DetailsScreen";

import { View, Text, Pressable, TouchableOpacity } from "react-native";
import Cart from "./screens/Cart";

import { Provider, useSelector } from 'react-redux'; // Import Provider từ react-redux
import store from './screens/store'; // Import store bạn đã tạo
import RootStackScreen from "./screens/RootStackScreen";
import VnPayPayment from "./screens/VnPayPaymentScreen ";
import UserScreen from "./screens/UserScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import PaymentMethod from "./screens/PaymentMethod";

const App = (route) => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }


  
  const Stack = createStackNavigator();

  const Tab = createBottomTabNavigator();


  function Navigation(route) {
  //  const loginis=route.params.isLoggedIn
  const cartData= useSelector((state) =>state.reducer)
 
    return (
        
      <Tab.Navigator
      tabBarOption ={{
        style:{
       
        
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
      
        options={{
          tabBarLabel: "Trang chủ",
          tabBarLabelStyle: { color: "#FFB6C1" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="#FFB6C1" />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            ),
        }}
      />
       <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Giỏ hàng",
          tabBarLabelStyle: { color: "#FFB6C1" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="shoppingcart" size={24} color="#FFB6C1" />
            ) : (
              <AntDesign name="shoppingcart" size={24} color="pink" />
            ),
            tabBarBadge: cartData.length > 0 ? cartData.length : null, // Hiển thị badge (số lượng) nếu giỏ hàng có sản phẩm
        }}
      />
     
      <Tab.Screen
       name="Tài Khoản"
        component={UserScreen}
       
        options={{
          tabBarLabel: "Tài Khoản",
          tabBarLabelStyle: { color: "#FFB6C1" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color="#FFB6C1" />
            ) : (
              <Ionicons name="person-outline" size={24} color="pink" />
            ),
        }}
      />

     
    </Tab.Navigator>
    );
  }

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="RootStack">
        <Stack.Screen name="Main"   component={Navigation} />

        <Stack.Screen
          name="Home"
          component={Home}
          
          options={{
            title: 'Trang Chủ', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerStatusBarHeight: 1
          }}
        />
       
        <Stack.Screen
          name="Tài Khoản"
         
          component={UserScreen}
          options={{
            title: 'Tài Khoản', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

        
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: 'Second Page', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        {/* <Stack.Screen name="Cart" component={Cart} /> */}
        <Stack.Screen name="VnPayPayment" component={VnPayPayment} />
        <Stack.Screen name="RootStack" component={RootStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  );
};
export default App;
