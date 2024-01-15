import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  Animated,
  Easing 
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

const SplashScreen = ({ navigation }) => {
  const { colors } = useTheme();
  // const viewRef = useRef(null);

  // const animateContinuously = () => {
  //   if (viewRef.current) {
  //     viewRef.current.slideInUp(3000).then(() => {
  //       // Sau khi hoàn thành hiệu ứng slideInUp, gọi hàm đệ quy sau 1 giây
  //       setTimeout(() => {
  //         animateContinuously();
  //       }, 500); // Thời gian trễ 1 giây
  //     });
  //   }
  // };

  // useEffect(() => {
  //   // Start the initial animation
  //   animateContinuously();
  // }, []); // Empty dependency array



  const [floatAnim] = useState(new Animated.Value(0));
  const [animationStarted, setAnimationStarted] = useState(false);
  useEffect (() => {
  Animated.loop(
  Animated.sequence([
  Animated.timing (floatAnim, {
    toValue: 20, // Float up
    duration: 2000,
    easing: Easing.linear,
    useNativeDriver: false,
  }),
  Animated.timing (floatAnim, {
  toValue: -20, // Float down
  duration: 2000,
  easing: Easing.linear,
  useNativeDriver: false,
  }),
  ])
  ).start();
  }, []);


  return (
    <Animatable.View   style={styles.container}>
      <StatusBar backgroundColor='#FFCCCC' barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Text   style={{ fontSize: 50, fontWeight: '900', color: 'white' }}>
          SHOP SNOW NGHI
        </Animatable.Text>
      </View>
      <Animatable.View
       
        style={[
          styles.footer,
          {
            backgroundColor: colors.background
          },{ transform: [{ translateY: floatAnim }] }
        ]}
      >
        <Text style={[styles.title, { color: colors.text }]}>Đăng nhập và đăng kí</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <LinearGradient colors={['#FFCCCC', '#FFCCCC']} style={styles.signIn}>
              <Text style={styles.textSign}>Bắt đầu</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </Animatable.View>
  );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCCCC',
    height:1000,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    top:150
  },
  logo: {
    width: height_logo,
    height: height_logo
  },
  title: {
    color: '#FFCCCC',
    fontSize: 30,
    fontWeight: 'bold'
  },
  text: {
    color: 'grey',
    marginTop: 5
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold'
  }
});
