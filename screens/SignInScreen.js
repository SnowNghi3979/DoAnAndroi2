import React, { useEffect, useState } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    ActivityIndicator,
    Keyboard,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Button, Modal } from 'react-native-paper';
import bcrypt from 'bcryptjs';


import { useDispatch } from 'react-redux';
import { setUser } from './userActions';
const SignInScreen = ({}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); 


    const [loading, setLoading] = useState(false);
   
    const handleSignIn = () => {
        // Lấy giá trị từ TextInput và kiểm tra với dữ liệu từ API
        Keyboard.dismiss();
        setLoading(true);
        fetch('http://192.168.180.108:9089/users')
          .then(response => response.json())
          .then(data => {
            setLoading(false);
            
            const user = data.find(item => item.username === username);
          
            if (user) {
              // So sánh mật khẩu đã nhập với mật khẩu đã lưu trong cơ sở dữ liệu
              const isPasswordCorrect = bcrypt.compareSync(password, user.password);
            
              
              if (isPasswordCorrect) {
                
                setIsLoggedIn(true);
                // Nếu thông tin đúng, chuyển hướng đến trang Home
                dispatch(setUser(user));
                // Chuyển hướng người dùng đến màn hình Main

                
                navigation.navigate('Main');
          
              } else {
                // Nếu thông tin sai, hiển thị thông báo lỗi
                setLoading(false);
                setErrorModalVisible(true);
              }
            } else {
              setErrorModalVisible(true);
            }
          })
          .catch(error => {
            console.error('Lỗi cuộc gọi API:', error);
          });
      };
    return (
        
        <View style={styles.container}>

            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            {loading && (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#009387" />
                </View>
            )}
            
            <View style={styles.header}>
                <Text style={styles.text_header}>Xin chào mọi người!</Text>
            </View>
            <View style={[styles.footer]}>
                <Text style={styles.text_footer}>Tên đăng nhập</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        size={20}
                    />
                    <TextInput 
                        placeholder=""
                        placeholderTextColor="#666666"
                        style={styles.textInput}
                        value={username} // Bắt giá trị từ state
                        onChangeText={text => setUsername(text)}
                    />
                </View>

                <Text style={[styles.text_footer, { marginTop: 35 }]}>Mật khẩu</Text>
                <View style={styles.action}>
                    <Feather 
                        name="lock"
                        size={20}
                    />
                    <TextInput 
                        placeholder=""
                        placeholderTextColor="#666666"
                        secureTextEntry={true}
                        style={styles.textInput}
                        value={password} // Bắt giá trị từ state
                        onChangeText={text => setPassword(text)}
                    />
                </View>

                <TouchableOpacity>
                    <Text style={{color: '#db4040', marginTop: 15}}>Quên mật khẩu?</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={handleSignIn}
                    >
                        <LinearGradient
                            colors={['#FFCCCC', '#FFCCCC']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}       >Đăng nhập</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={[styles.signIn, {
                            borderColor: '#FFCCCC',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={styles.textSign}>Đăng kí </Text>
                    </TouchableOpacity>
                </View>
            </View>



            <Modal
                transparent={true}
                animationType="slide"
                visible={errorModalVisible}
                style={{left:90}}
            >
                
                <View style={{backgroundColor:"white",position:"absolute",height:200,borderRadius:10}}>
                    <View style={{top:90,marginRight:10,marginLeft:10}}>
                    <Text style={{fontWeight:"300"}}>Sai tên đăng nhập hoặc mật khẩu !</Text>
                    </View>
                    <TouchableOpacity style={{  backgroundColor: '#009387',top:140,height:30,borderRadius:5,marginRight:10,marginLeft:10}} onPress={() => setErrorModalVisible(false)}>
                       
                        <Text style={{left:90, color: 'white',alignItems:"center",top:5}}>Đóng</Text>
                      
                    </TouchableOpacity>
                    <FontAwesome name="exclamation-circle" size={40} color="red" style={{position:"absolute",left:100,top:10}} />

                </View>
            </Modal>
             
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#FFCCCC'
    },
    loading: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
