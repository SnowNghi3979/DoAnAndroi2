import * as React from "react";
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Home = (props) => {
  const navigation = useNavigation();

  const products = [
    {
      id: "1",
      name: "Cháo Ếch",
      price: "4.709.000",
      pricesale:"10%",
      rating: "4.1",
      description:
        "Cháo ếch là một món ăn truyền thống phổ biến ở nhiều nơi trên thế giới, đặc biệt là tại các nước châu Á. Đây là một món ăn ngon và dinh dưỡng, thường được chuẩn bị bằng cách chế biến ếch và gạo. Dưới đây là mô tả cơ bản về cách chế biến đoạn cháo ếch.",
      thanhphan: "Gạo,Thịt Ếch,Rau,Ngò Rí",
      image: require("../assets/chaoech.jpg"),
    },
    {
      id: "2",
      name: "soupBumil",
      price: "IDR 4.709.000",
      rating: "4.1",
      image: require("../assets/pic1.png"),
    },
    {
      id: "3",
      name: "soupBumil",
      price: "IDR 4.709.000",
      rating: "4.1",
      image: require("../assets/pic1.png"),
    },
    {
      id: "4",
      name: "soupBumil",
      price: "IDR 4.709.000",
      rating: "4.1",
      image: require("../assets/pic1.png"),
    },
    {
      id: "5",
      name: "soupBumil",
      price: "IDR 4.709.000",
      rating: "4.1",
      image: require("../assets/pic1.png"),
    },
    {
      id: "6",
      name: "soupBumil",
      price: "IDR 4.709.000",
      rating: "4.1",
      image: require("../assets/pic1.png"),
    },
    {
      id: "7",
      name: "soupBumil",
      price: "IDR 4.709.000",
      rating: "4.1",
      image: require("../assets/pic1.png"),
    },
    {
      id: "8",
      name: "soupBumil",
      price: "IDR 4.709.000",
      pricesale:"10%",
      rating: "4.1",
      image: require("../assets/pic1.png"),
    },
    {
      id: "9",
      name: "soupBumil",
      price: "IDR 4.709.000",
      rating: "4.1",
      image: require("../assets/pic1.png"),
    },
    {
      id: "10",
      name: "soupBumil",
      price: "IDR 4.709.000",
      rating: "4.1",
      image: require("../assets/pic1.png"),
    },
    {
      id: "11",
      name: "soupBumil",
      price: "IDR 4.709.000",
      rating: "4.1",
      image: require("../assets/pic1.png"),
    },
    // Add more products here
  ];

  const handleProductPress = (product) => {
    navigation.navigate("DetailsScreen", { product });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../assets/pic.png")} />
        <View>
          <Text style={styles.foodmarket}>FoodMarket</Text>
          <Text style={styles.letsGetSome}>Let’s get some foods</Text>
        </View>
      </View>

      <View horizontal style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>New Taste</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Recommended</Text>
        </TouchableOpacity>
      </View>

      <ScrollView >
        <View style={styles.productList}>
          {products.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.productItem}
              onPress={() => handleProductPress(product)}
            >
              <View style={styles.productImageContainer}>
                <Image style={styles.productImage} source={product.image} />
              </View>
              <Text style={styles.productName} numberOfLines={2}>
                {product.name}
              </Text>
              <Text style={styles.productPrice}>{product.price}</Text>
              <View style={styles.productRating}>
                <Text style={styles.rating}>{product.rating}</Text>
                <Image
                  style={styles.starsIcon}
                  source={require("../assets/stars.png")}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView >
      <View style={[styles.bottomNav, styles.itemLayout1]}>
        <View style={[styles.bg2, styles.itemLayout1]} />
        <View style={[styles.icon, styles.iconLayout]}>
          <View style={[styles.place, styles.iconLayout]} />
          <View style={styles.icHome}>
            <View style={[styles.subtract, styles.subtractLayout]}>
              <Image
                style={[styles.subtractChild, styles.subtractLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-1.png")}
              />
              <Text style={[styles.text3, styles.textTypo]}>+</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafc",
    alignItems: "center", // Căn giữa theo chiều ngang
  },
  header: {
    top: 22,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  foodmarket: {
    fontSize: 22,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_100,
  },
  letsGetSome: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsLight,
    color: Color.colorLightslategray,
  },
  tabBar: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  tabItem: {
    paddingHorizontal: 16,
  },
  tabText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_100,
  },
 
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 0,
  },
  productItem: {
    width: "48%",
    marginBottom: 16,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
    padding: 16,
  },
  productImageContainer: {
    width: "100%",
    aspectRatio: 1,
    marginBottom: 8,
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius:10,
  },
  productName: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_100,
    marginTop: 8,
  },
  productPrice: {
    fontSize: FontSize.size_smi,
    color: Color.colorLightslategray,
  },
  productRating: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorLightslategray,
    marginRight: 4,
  },
  starsIcon: {
    width: 16,
    height: 16,
  },
  bottomNav: {
    flexDirection: 'row', // Đảm bảo các biểu tượng nằm trên cùng một hàng
    alignItems: 'center', // Căn giữa theo chiều dọc
    justifyContent: 'space-between', // Chia đều chiều rộng giữa các biểu tượng
    paddingHorizontal: 16, // Khoảng cách nằm ở hai bên của container
    height: 60, // Chiều cao của container
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  itemLayout1: {
    height: 60,
    position: "absolute",
  },
  bg2: {
    backgroundColor: Color.colorWhite,
    top: 0,
    width: 360,
    left: 0,
  },
  icon: {
    left: 5,
    top: 5,
    height: 100,
    width: 150,
  },
  iconLayout: {
    height: 50,
    width: 90,
    position: "absolute",
    alignItems:"center",
    
  },
  place: {
    left: 0,
    top: 0,
  },
  icHome: {
    top: 12,
    left: 50,
    width: 32,
    height: 32,
    position: "relative",
    overflow: "visible",
  },
  icon1: {
    left: 300,
    top: 3,
    height: 55,
    width: 90,
    alignItems:"center",
    
  },
  icon2: {
    left: 160,
    top: 3,
    height: 55,
    width: 90,
  },
  subtract: {
    backgroundColor: Color.colorGold,
  },
  subtractChild: {
    left: 2,
    top: 0,
    position: "absolute",
    
  },
  subtractLayout: {
    width: 28,
    height: 32,
    right:27,
  },
  text3: {
    top: 4,
    left: 7,
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    position: "absolute",
    
  },
  textTypo: {
    fontFamily: FontFamily.poppinsRegular,
    
    
  },
  iconContainer: {
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconText: {
    marginTop: 4,
  },
});

export default Home;
