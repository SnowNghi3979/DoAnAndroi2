import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const SignUp = ({ navigation }) => {


  
  return (
    <View style={styles.signUp}>
      <View style={[styles.form, styles.bgLayout]}>
        <View style={[styles.bg, styles.childPosition1]} />
        <View style={[styles.inputAndLabel, styles.inputLayout1]}>
          <Text style={[styles.fullName, styles.signUp1Position]}>
            Full Name
          </Text>
          <View style={[styles.input, styles.inputLayout]}>
            <View style={[styles.inputChild, styles.childPosition]} />
            <Text style={styles.typeYourFull}>Type your full name</Text>
          </View>
        </View>
        <View style={[styles.pic, styles.picLayout]}>
          <Image
            style={[styles.picChild, styles.picLayout]}
            contentFit="cover"
            //source={require("../assets/ellipse-6.png")}
          />
          <View style={[styles.photo, styles.photoLayout]}>
            <Image
              style={[styles.photoChild, styles.photoLayout]}
              contentFit="cover"
              //source={require("../assets/ellipse-7.png")}
            />
            <Text style={[styles.addPhoto, styles.addPhotoTypo]}>{`Add
Photo`}</Text>
          </View>
        </View>
        <View style={[styles.inputAndLabel1, styles.inputLayout1]}>
          <Text style={[styles.fullName, styles.signUp1Position]}>
            Email Address
          </Text>
          <View style={[styles.input, styles.inputLayout]}>
            <View style={[styles.inputChild, styles.childPosition]} />
            <Text style={styles.typeYourFull}>Type your email address</Text>
          </View>
        </View>
        <View style={[styles.inputAndLabel2, styles.inputLayout1]}>
          <Text style={[styles.fullName, styles.signUp1Position]}>
            Password
          </Text>
          <View style={[styles.input, styles.inputLayout]}>
            <View style={[styles.inputChild, styles.childPosition]} />
            <Text style={styles.typeYourFull}>Type your password</Text>
          </View>
        </View>
        <View style={[styles.btn, styles.btnLayout]}>
          <View style={[styles.btnChild, styles.btnLayout]} />
          <Text style={[styles.continue, styles.signUp1Typo]} onPress={() => navigation.navigate('SignIn')}>Continue</Text>
        </View>
      </View>
      <View style={styles.bg1Position}>
        <View style={[styles.bg1, styles.bg1Position]} />
        <View style={styles.title}>
          <Text style={[styles.signUp1, styles.signUp1Typo]}>Sign Up</Text>
          <Text style={[styles.registerAndEat, styles.addPhotoTypo1]}>
            Register and eat
          </Text>
        </View>
        <Image
          style={styles.arrowBackIos24pxIcon}
          contentFit="fill"
          //source={require("../assets/arrow-back-ios-24px.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgLayout: {
    height: 508,
    width: 360,
    position: "absolute",
  },
  childPosition1: {
    top: 0,
    left: 0,
  },
  inputLayout1: {
    height: 70,
    width: 312,
    left: 24,
    position: "absolute",
  },
  signUp1Position: {
    textAlign: "left",
    top: 0,
    left: 0,
  },
  inputLayout: {
    height: 40,
    width: 312,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_5xs,
    top: 0,
    left: 0,
  },
  picLayout: {
    height: 110,
    width: 110,
    position: "absolute",
  },
  photoLayout: {
    height: 90,
    width: 90,
    position: "absolute",
  },
  addPhotoTypo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  btnLayout: {
    height: 45,
    width: 312,
    position: "absolute",
  },
  signUp1Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorGray_100,
    position: "absolute",
  },
  bg1Position: {
    height: 108,
    top: 50,
    width: 360,
    left: 15,
    position: "absolute",
  },
  addPhotoTypo1: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    color: Color.colorLightslategray,
    position: "absolute",
  },
  bg: {
    backgroundColor: Color.colorWhite,
    height: 508,
    width: 360,
    position: "absolute",
  },
  fullName: {
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  inputChild: {
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    height: 40,
    width: 312,
    position: "absolute",
  },
  typeYourFull: {
    top: 9,
    color: Color.colorLightslategray,
    fontSize: FontSize.size_sm,
    left: 10,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  input: {
    top: 30,
    left: 0,
  },
  inputAndLabel: {
    top: 152,
  },
  picChild: {
    top: 0,
    left: 0,
  },
  photoChild: {
    top: 0,
    left: 0,
  },
  addPhoto: {
    top: 24,
    left: 25,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    color: Color.colorLightslategray,
    position: "absolute",
  },
  photo: {
    top: 10,
    left: 10,
    height: 90,
    width: 90,
  },
  pic: {
    top: 26,
    left: 125,
  },
  inputAndLabel1: {
    top: 238,
  },
  inputAndLabel2: {
    top: 324,
  },
  btnChild: {
    backgroundColor: "#ffc700",
    borderRadius: Border.br_5xs,
    top: 0,
    left: 0,
  },
  continue: {
    top: 12,
    left: 123,
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  btn: {
    top: 418,
    left: 24,
  },
  form: {
    top: 250,
    left: 30,
  },
  bg1: {
    backgroundColor: Color.colorWhite,
  },
  signUp1: {
    fontSize: 22,
    textAlign: "left",
    top: 0,
    left: 0,
  },
  registerAndEat: {
    top: 33,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "left",
    left: 0,
  },
  title: {
    left: 74,
    width: 114,
    height: 54,
    top: 70,
    position: "absolute",
  },
  arrowBackIos24pxIcon: {
    top: 75,
    width: 24,
    height: 24,
    left: 24,
    position: "absolute",
  },
  signUp: {
    backgroundColor: "#fafafc",
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default SignUp;
