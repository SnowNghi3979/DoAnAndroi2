import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, StatusBar, TouchableOpacity ,Image } from 'react-native';
import FormData from 'form-data'; // Import thư viện form-data
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';



const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [role] = useState('1');
  const [status] = useState('1');
  const [phone] = useState('');
  const [address] = useState('');
 
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
 

  const [image, setSelectedImage] = useState('');

  const handleChooseImage = async () => {
    const options = {
      title: 'Chọn ảnh',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
  
    try {
      const response = await ImagePicker.launchImageLibraryAsync(options);
      if (!response.canceled) { // Thay đổi từ 'cancelled' sang 'canceled'
        if (response.assets && response.assets.length > 0) { // Sử dụng key 'assets'
          const selectedImage = response.assets[0];
          if (selectedImage) {
            // Tiếp tục xử lý hình ảnh đã chọn
            setSelectedImage(selectedImage);
          }
        } else {
          // Xử lý lỗi: không có hình ảnh được chọn
          alert('Không có hình ảnh được chọn. Vui lòng thử lại.');
        }
      }
    } catch (error) {
      console.log('Lỗi khi mở thư viện ảnh:', error);
      // Xử lý lỗi khi có vấn đề với thư viện ảnh
    }
  };

  const handleLaunchCamera = async () => {
    const cameraOptions = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    };
  
    try {
      const response = await ImagePicker.launchCameraAsync(cameraOptions);
      if (!response.canceled) { // Sử dụng key 'canceled' thay vì 'cancelled'
        if (response.assets && response.assets.length > 0) { // Sử dụng key 'assets'
          const selectedImage = response.assets[0];
          if (selectedImage) {
            setSelectedImage(selectedImage);
          }
        }
      }
    } catch (error) {
      console.log('Lỗi khi mở camera:', error);
      // Xử lý lỗi khi có vấn đề với việc mở camera
    }
  };



  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert('Mật khẩu và mật khẩu xác nhận không khớp. Vui lòng nhập lại.');
    } else {
      const user = {
        username,
        password,
        name,
        email,
        role,
        status,
        phone,
        address,
      };

      if (image) {
        const localUri = image.uri;
        const filename = localUri.split('/').pop(); // Trích xuất tên tệp từ URI
    
        // Xác định loại MIME của tệp
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : 'image';
    
        // Tạo một đối tượng MultipartFile và thêm vào FormData
        user.image={
          uri: localUri,
          name: filename,
          type,
        }
    
        
      }



      
  
      fetch('http://192.168.180.108:9089/users/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user), // Chuyển đối tượng user thành chuỗi JSON
      })
        .then(response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw new Error('Lỗi không mong muốn từ máy chủ. Mã trạng thái: ' + response.status);
          }
        })
        .then(data => {
          navigation.navigate('SignInScreen');
        })
        .catch(error => {
          console.error('Lỗi cuộc gọi API:', error);
          console.log(user)
          alert('Đăng ký thất bại. Vui lòng thử lại.');
        });
    
  
     
  

      
    }
  };
  
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Đăng kí ở đây!</Text>
      </View>
      <View style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Tên đăng nhập</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Your Username"
              style={styles.textInput}
              autoCapitalize="none"
              value={username}
              onChangeText={text => setUsername(text)}
            />
          </View>

        
       
         

          <Text style={[styles.text_footer, { marginTop: 35 }]}>Mật khẩu</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Your Password"
              secureTextEntry={true}
              style={styles.textInput}
              autoCapitalize="none"
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <Text style={[styles.text_footer, { marginTop: 35 }]}>Xác nhận mật khẩu</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={true}
              style={styles.textInput}
              autoCapitalize="none"
              value={confirmPassword} // Bắt giá trị từ state
              onChangeText={text => setConfirmPassword(text)}
            />
   </View>
   <Text style={[styles.text_footer, { marginTop: 35 }]}>Tên tài khoản</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Your Name"
             
              style={styles.textInput}
              autoCapitalize="none"
              value={name} // Bắt giá trị từ state
              onChangeText={text => setname(text)}
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 35 }]}>Email</Text>
          <View style={styles.action}>
            <TextInput
              placeholder=" Your Email"
             
              style={styles.textInput}
              autoCapitalize="none"
              value={email} // Bắt giá trị từ state
              onChangeText={text => setemail(text)}
            />
          </View>


          {/* <View style={styles.action}>
    <Picker
      style={{ flex: 1 }}
      selectedValue={selectedOption}
      onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}
    >
      <Picker.Item label="Chọn ảnh từ thư viện" value="library" />
      <Picker.Item label="Chụp ảnh từ camera" value="camera" />
    </Picker>
  </View> */}

  {/* <View style={styles.action}>
    <TouchableOpacity
      style={{ flex: 1, marginRight: 5 }}
      onPress={() => {
        if (selectedOption === 'library') {
          handleChooseImage();
        } else if (selectedOption === 'camera') {
          handleLaunchCamera();
        }
      }}
    >
      <Text style={styles.textPrivate}>Thêm ảnh</Text>
    </TouchableOpacity>
  </View> */}

  {image && (
            <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />
          )}

          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              Đồng ý điều khoản
            </Text>
            <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Điều khoản dịch vụ</Text>
            <Text style={styles.color_textPrivate}>{" "} và </Text>
            <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Chính sách bảo mật</Text>
          </View>

          <View style={styles.button}>
            <View style={styles.signIn}>
              <Text style={[styles.textSign, { color: '#fff' }]}>Đăng nhập</Text>
            </View>

            <TouchableOpacity
              style={[styles.signIn, {
                borderColor: '#FFCCCC',
                borderWidth: 1,
                marginTop: 15
              }]}
              onPress={handleSignUp}
            >
              <Text style={[styles.textSign, { color: '#FFCCCC' }]}>Đăng kí</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCCCC'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: 5,
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
    marginTop: 0,
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
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },
  color_textPrivate: {
    color: 'grey'
  }
});
