import { useFonts } from "expo-font";
import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const menus = [
  {
    id: 1,
    name: "Deposit",
    icon: require("../../assets/images/icons/deposit.png"),
  },
  {
    id: 2,
    name: "Referral",
    icon: require("../../assets/images/icons/referral.png"),
  },
  {
    id: 3,
    name: "Grid Trading",
    icon: require("../../assets/images/icons/grid-trading.png"),
  },
  {
    id: 4,
    name: "Margin",
    icon: require("../../assets/images/icons/margin.png"),
  },
  {
    id: 5,
    name: "Launchpad",
    icon: require("../../assets/images/icons/launchpad.png"),
  },
  {
    id: 6,
    name: "Savings",
    icon: require("../../assets/images/icons/savings.png"),
  },
  {
    id: 7,
    name: "Liquid Swap",
    icon: require("../../assets/images/icons/liquid-swap.png"),
  },
  {
    id: 8,
    name: "More",
    icon: require("../../assets/images/icons/more.png"),
  },
];

const chooseMenus = [
  {
    id: 1,
    name: "P2P Trading",
    desc: "Bank Transfer, Paypal Revolution",
    image: require("../../assets/images/icons/rocket.png"),
  },
  {
    id: 2,
    name: "Credit/Debit Card",
    desc: "Visa, Mastercard",
    image: require("../../assets/images/icons/credit.png"),
  },
];

const RecentCoins = [
  {
    id: 1,
    name: "BTC/BUSD",
    amount: 40059.83,
    image: require("../../assets/images/markets/bitcoin.png"),
    score: 0.81,
  },
  {
    id: 2,
    name: "SOL/BUSD",
    amount: 2059.83,
    image: require("../../assets/images/markets/chainlink.png"),
    score: -0.81,
  },
  {
    id: 3,
    name: "REN/BUSD",
    amount: 40.05983,
    image: require("../../assets/images/markets/ren.png"),
    score: 0.81,
  },
  {
    id: 4,
    name: "BTC/BUSD",
    amount: 40059.83,
    image: require("../../assets/images/markets/bitcoin.png"),
    score: -0.81,
  },
];

const TopCoins = [
    {
      id: 1,
      name: "MFT/BUSD",
      amount: 40059.83,
      image: require("../../assets/images/markets/hifi.png"),
      score: 0.81,
    },
    {
      id: 2,
      name: "REN/BUSD",
      amount: 2059.83,
      image: require("../../assets/images/markets/ren.png"),
      score: -0.81,
    },
    {
      id: 3,
      name: "CHN/BUSD",
      amount: 40.05983,
      image: require("../../assets/images/markets/chainlink.png"),
      score: 0.81,
    },
    {
      id: 4,
      name: "BTC/BUSD",
      amount: 40059.83,
      image: require("../../assets/images/markets/bitcoin.png"),
      score: -0.81,
    },
  ];

const ChooseMenu = ({ title, desc, img }) => (
  <View style={styles.bannerCard}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <ImageBackground
        source={require("../../assets/images/icons/bg-icon.png")}
      >
        <Image
          source={img}
          style={{ width: 50, height: 50, resizeMode: "contain" }}
        />
      </ImageBackground>
      <View style={{ marginLeft: 10 }}>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 16,
            color: "#1B232A",
            marginBottom: 5,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 13,
            color: "#A7AFB7",
          }}
        >
          {desc}
        </Text>
      </View>
    </View>
    <TouchableOpacity
      style={{
        backgroundColor: "#E3E8ED",
        borderRadius: 10,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Feather name="arrow-right" size={20} color="#777" />
    </TouchableOpacity>
  </View>
);

const Card = ({ coin }) => (
  <View style={styles.card}>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View>
        <Text
          style={[
            { fontFamily: "Poppins-Bold", fontSize: 17 },
            coin.score >= 0 ? { color: "#5ED5A8" } : { color: "#DD4B4B" },
          ]}
        >
          {coin.amount}
        </Text>
        <Text style={{ fontFamily: "Poppins-Regular" }}>
          {coin.name}
          {"  "}
          <Text
            style={[
              { fontSize: 12 },
              coin.score >= 0 ? { color: "#5ED5A8" } : { color: "#DD4B4B" },
            ]}
          >
            {coin.score}%
          </Text>
        </Text>
      </View>
      <Image source={coin.image} />
    </View>
    {coin.score >= 0 ? (
      <Image
        source={require("../../assets/images/good-state.png")}
        style={{ width: 150, height: 50 }}
      />
    ) : (
      <Image
        source={require("../../assets/images/low-state.png")}
        style={{ width: 150, height: 50 }}
      />
    )}
  </View>
);

const HomeScreen = () => {
  const [loaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      {/* Header */}
      <Header />

      {/* Menus */}
      <View style={styles.menusWrapper}>
        {menus.map((menu, index) => (
          <TouchableOpacity
            style={[
              {
                alignItems: "center",
                justifyContent: "center",
                margin: 8,
                // backgroundColor: "red",
                //   width: 75,
                alignSelf: "center",
              },
              menu.name == "Deposit" || menu.name == "Referral"
                ? { marginLeft: 10 }
                : { marginLeft: 0 },
            ]}
            key={index}
          >
            <Image
              source={menu.icon}
              style={{ width: 55, height: 55, resizeMode: "contain" }}
            />
            <Text style={styles.iconText}>{menu.name}</Text>
            <View style={styles.divider}></View>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} vertical>
        <View style={{ marginHorizontal: 15 }}>
          {chooseMenus.map((menu, index) => (
            <ChooseMenu
              key={index}
              title={menu.name}
              img={menu.image}
              desc={menu.desc}
            />
          ))}
        </View>

        {/* Recent Coin */}
        <View style={{ marginHorizontal: 15, marginTop: 25 }}>
          <Text style={styles.header}>Recent Coin</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {RecentCoins.map((coin, index) => (
              <Card coin={coin} key={index} />
            ))}
          </ScrollView>
        </View>

        {/* Recent Coin */}
        <View style={{ marginHorizontal: 15, marginTop: 25 }}>
          <Text style={styles.header}>Top Coin</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {TopCoins.map((coin, index) => (
              <Card coin={coin} key={index} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      {/* Banner Card */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  menusWrapper: {
    backgroundColor: "#1B232A",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 0,
    zIndex: -1,
  },
  iconText: {
    fontFamily: "Poppins-Regular",
    color: "#FFF",
    fontSize: 12.5,
  },
  divider: {
    borderRadius: 5,
    height: 0.4,
    backgroundColor: "#FFF",
    opacity: 0.1,
  },
  bannerCard: {
    backgroundColor: "#F1F3F6",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 15,
  },
  header: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
  },
  card: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    backgroundColor: "#FDFDFD",
    borderRadius: 15,
    marginRight: 20,
    marginVertical: 15,
  },
});
