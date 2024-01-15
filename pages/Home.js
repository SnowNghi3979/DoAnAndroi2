import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.shoppingBagParent}>
      </View>
      <View style={styles.homeItem} />
      <View style={[styles.bottomNav, styles.bottomLayout]}>
        <View style={styles.bottomNavItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  searchPosition: {
    opacity: 0.2,
    position: "absolute",
  },
  iconLayout: {
    top: 215,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  homeInnerLayout: {
    width: 152,
    borderRadius: 15,
    left: 27,
    position: "absolute",
  },
  homeChildLayout: {
    height: 190,
    left: 196,
    width: 152,
    borderRadius: 15,
    position: "absolute",
  },
  homeChild3Layout: {
    height: 40,
    width: 40,
    left: 130,
    position: "absolute",
  },
  homeChildPosition: {
    left: 299,
    height: 40,
    width: 40,
    position: "absolute",
  },
  heartIconLayout: {
    height: 18,
    width: 18,
    position: "absolute",
    overflow: "hidden",
  },
  heartIconPosition: {
    left: 310,
    height: 18,
    width: 18,
    position: "absolute",
    overflow: "hidden",
  },
  cottonTypo: {
    fontSize: 16,
    textAlign: "left",
    color: "#000",
    fontFamily: "Quicksand-Medium",
    fontWeight: "500",
    position: "absolute",
  },
  textTypo: {
    fontSize: 20,
    fontFamily: "Quicksand-Bold",
    fontWeight: "700",
    textAlign: "left",
    color: "#000",
    position: "absolute",
  },
  bottomLayout: {
    height: 144,
    width: 539,
    position: "absolute",
  },
  home1Typo: {
    textAlign: "center",
    fontSize: 12,
    top: 57,
    fontFamily: "Quicksand-Medium",
    fontWeight: "500",
    position: "absolute",
  },
  hiSelina: {
    top: 43,
    left: 84,
    textAlign: "left",
    color: "#000",
    fontFamily: "Quicksand-Medium",
    fontWeight: "500",
    fontSize: 14,
    position: "absolute",
  },
  findTheBest: {
    top: 119,
    fontSize: 24,
    fontFamily: "Quicksand-Bold",
    fontWeight: "700",
    left: 27,
    textAlign: "left",
    color: "#000",
    position: "absolute",
  },
  homeChild: {
    width: 42,
    height: 42,
    top: 29,
    left: 27,
    position: "absolute",
  },
  shoppingBagIcon: {
    top: 8,
    left: 0,
  },
  groupChild: {
    top: 0,
    left: 12,
    width: 20,
    height: 20,
    position: "absolute",
  },
  text: {
    top: 4,
    left: 19,
    fontSize: 10,
    fontFamily: "Roboto-Medium",
    color: "#fff",
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  shoppingBagParent: {
    top: 30,
    left: 316,
    width: 32,
    height: 32,
    position: "absolute",
  },
  homeItem: {
    top: 202,
    backgroundColor: "#e8e8e8",
    width: 321,
    height: 50,
    borderRadius: 15,
    left: 27,
    position: "absolute",
  },
  searchIcon: {
    left: 44,
    top: 215,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  search: {
    top: 218,
    fontFamily: "Quicksand-Regular",
    left: 82,
    textAlign: "left",
    color: "#000",
    fontSize: 14,
    opacity: 0.2,
  },
  slidersIcon: {
    left: 306,
    position: "absolute",
  },
  homeInner: {
    height: 248,
    top: 282,
  },
  rectangleIcon: {
    top: 620,
    height: 191,
  },
  homeChild1: {
    top: 282,
  },
  homeChild2: {
    top: 565,
  },
  ellipseIcon: {
    top: 292,
  },
  homeChild3: {
    top: 630,
  },
  homeChild4: {
    top: 292,
  },
  homeChild5: {
    top: 575,
  },
  heartIcon: {
    left: 141,
    height: 18,
    width: 18,
    top: 303,
  },
  heartIcon1: {
    top: 641,
    left: 141,
    height: 18,
    width: 18,
  },
  heartIcon2: {
    top: 303,
  },
  heartIcon3: {
    top: 586,
  },
  cottonQueenT: {
    top: 541,
    left: 27,
  },
  cottonStyleT: {
    top: 483,
    left: 196,
  },
  greyTShirt: {
    top: 766,
    left: 196,
  },
  text1: {
    top: 566,
    left: 27,
  },
  text2: {
    top: 508,
    left: 196,
  },
  text3: {
    top: 791,
    left: 196,
  },
  bottomNavChild: {
    top: -40,
    left: 82,
  },
  heartIcon4: {
    top: 32,
    left: 315,
  },
  homeIcon: {
    left: 125,
    top: 29,
  },
  searchIcon1: {
    left: 217,
    top: 29,
  },
  userIcon: {
    left: 394,
    top: 29,
  },
  home1: {
    left: 120,
    color: "#ff937b",
  },
  bottomNavItem: {
    top: 85,
    left: 106,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#ff937b",
    width: 63,
    height: 4,
    position: "absolute",
  },
  search1: {
    left: 210,
    color: "#000",
  },
  liked: {
    left: 309,
    color: "#000",
  },
  profile: {
    left: 388,
    color: "#000",
  },
  bottomNav: {
    top: 723,
    left: -82,
  },
  home: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Home;
