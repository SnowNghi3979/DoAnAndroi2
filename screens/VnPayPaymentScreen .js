import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, StyleSheet,Text, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';


const VnPayPayment = (route ) => {
 

  const navigation = useNavigation();
  paymentUrl=route.route.params.paymentUrl
  console.log(paymentUrl)
  return (
    <SafeAreaView style={styles.container}>
      <WebView
       source={{ uri: paymentUrl }}


       onMessage={(event) => {
        const data = JSON.parse(event.nativeEvent.data);
        if (data.returnUrl) {
            // Bạn có thể chuyển hướng về trang Home của ứng dụng React Native ở đây
            navigation.navigate('Main')
          
        }
    }}
        style={styles.webview}
      />
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default VnPayPayment;
