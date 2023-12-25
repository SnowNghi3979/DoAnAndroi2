import * as React from "react";
import { StyleSheet, View, Text,TextInput,TouchableOpacity  } from "react-native";
import { useState } from "react"; 
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SignIn = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Các hàm xử lý khi người dùng thay đổi tên người dùng và mật khẩu
  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  return (
    <View style={styles.signIn}>
      <View style={[styles.header, styles.bgLayout]}>
        <View style={[styles.bg, styles.bgBg]} />
        <View style={styles.title}>
          <Text style={[styles.signIn1, styles.signIn1Position]}>Sign In</Text>
          <Text style={[styles.findYourBest, styles.yourClr]}>
            Find your best ever meal
          </Text>
        </View>
      </View>
      <View style={[styles.form, styles.bg1Layout]}>
        <View style={[styles.bg1, styles.bg1Layout]} />
        <View style={[styles.inputAndLabel, styles.inputLayout1]}>
  <Text style={[styles.emailAddress, styles.emailTypo]}>Email Address</Text>
  <TextInput
    style={styles.input} // Áp dụng các kiểu dáng và layout cho TextInput
    onChangeText={handleUsernameChange} // Xử lý khi người dùng thay đổi giá trị
    value={username} // Giá trị hiện tại của TextInput
    placeholder="Type your email address" // Placeholder
  />
</View>
<View style={[styles.inputAndLabel1, styles.inputLayout1]}>
  <Text style={[styles.emailAddress, styles.emailTypo]}>Password</Text>
  <TextInput
    style={styles.input} // Áp dụng các kiểu dáng và layout cho TextInput
    onChangeText={handlePasswordChange} // Xử lý khi người dùng thay đổi giá trị
    value={password} // Giá trị hiện tại của TextInput
    placeholder="Type your password" // Placeholder
    secureTextEntry={true} // Để ẩn mật khẩu
  />
</View>
<TouchableOpacity
  style={[styles.btn, styles.btnLayout]}
  onPress={() => navigation.navigate('Home')} // Xử lý khi nút được nhấn
>
  <View style={[styles.btnChild, styles.btnLayout]} />
  <Text style={[styles.signIn2, styles.signIn2Typo]}>Sign In</Text>
</TouchableOpacity>
<TouchableOpacity
  style={[styles.btn1, styles.btnLayout]}
  onPress={() => navigation.navigate('SignUp')} // Xử lý khi nút được nhấn
>
  <View style={[styles.btnItem, styles.btnLayout]} />
  <Text style={[styles.createNewAccount, styles.signIn2Typo]}>Create New Account</Text>
</TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgLayout: {
    height: 108,
    width: 360,
    left: 30,
    position: "absolute",
  },
  bgBg: {
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  signIn1Position: {
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  yourClr: {
    color: Color.colorLightslategray,
    fontSize: FontSize.size_sm,
  },
  bg1Layout: {
    height: 508,
    width: 360,
    left: 15,
    position: "absolute",
  },
  inputLayout1: {
    height: 70,
    width: 312,
    left: 24,
    position: "absolute",
  },
  emailTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  inputLayout: {
    height: 40,
    width: 312,
    position: "absolute",
  },
  btnChildPosition: {
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  btnLayout: {
    height: 45,
    width: 312,
    position: "absolute",
  },
  signIn2Typo: {
    textAlign: "center",
    top: 12,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  bg: {
    height: 108,
    width: 360,
    left: 0,
    position: "absolute",
  },
  signIn1: {
    fontSize: 22,
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    top: 0,
  },
  findYourBest: {
    top: 33,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  title: {
    width: 170,
    height: 54,
    left: 24,
    top: 30,
    position: "absolute",
  },
  header: {
    top: 70,
  },
  bg1: {
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  emailAddress: {
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
    left: 0,
    top: 0,
  },
  inputChild: {
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    height: 40,
    width: 312,
    position: "absolute",
  },
  typeYourEmail: {
    top: 9,
    left: 10,
    color: Color.colorLightslategray,
    fontSize: FontSize.size_sm,
  },
  input: {
    top: 30,
    left: 0,
  },
  inputAndLabel: {
    top: 26,
  },
  inputAndLabel1: {
    top: 112,
  },
  btnChild: {
    backgroundColor: "#ffc700",
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  signIn2: {
    left: 132,
    color: Color.colorGray_100,
  },
  btn: {
    top: 206,
    left: 24,
  },
  btnItem: {
    backgroundColor: Color.colorLightslategray,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  createNewAccount: {
    left: 83,
    color: Color.colorWhite,
  },
  btn1: {
    top: 263,
    left: 24,
  },
  form: {
    top: 280,
  },
  signIn: {
    backgroundColor: "#fafafc",
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default SignIn;
