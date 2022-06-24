import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";
import ListMarket from "../components/ListMarket";

const menus = [
  { id: 1, name: "Deposit" },
  { id: 2, name: "Withdraw" },
  { id: 3, name: "Transfer" },
];

const coins = [
  {
    id: 1,
    name: "Bitcoin",
    company: "BTC",
    value: "32,697.05",
    score: 0.81,
    image: require("../../assets/images/markets/bitcoin-logo.png"),
    total: 468554.23,
  },
  {
    id: 2,
    name: "Chailink",
    company: "LINK",
    value: "32,697.05",
    score: -0.81,
    image: require("../../assets/images/markets/chailink-logo.png"),
    total: 468554.23,
  },
  {
    id: 3,
    name: "Cardano",
    company: "ADA",
    value: "32,697.05",
    score: 0.81,
    image: require("../../assets/images/markets/cardano-logo.png"),
    total: 468554.23,
  },
  {
    id: 4,
    name: "SHIBA INU",
    company: "SHIB",
    value: "32,697.05",
    score: -0.81,
    image: require("../../assets/images/markets/shib-logo.png"),
    total: 468554.23,
  },
  {
    id: 5,
    name: "HIFI",
    company: "MFT",
    value: "32,697.05",
    score: -0.81,
    image: require("../../assets/images/markets/hifi-logo.png"),
    total: 468554.23,
  },
  {
    id: 6,
    name: "REN",
    company: "REN",
    value: "32,697.05",
    score: 0.81,
    image: require("../../assets/images/markets/ren-logo.png"),
    total: 468554.23,
  },
];

const WalletScreen = () => {
  const [active, setActive] = useState("Deposit");

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
      <ImageBackground
        source={require("../../assets/images/background-profile.png")}
        style={{
          height: 290,
          resizeMode: "cover",
          paddingHorizontal: 20,
          paddingTop: 60,
          paddingBottom: 60,
        }}
      >
        <View
          style={{
            fontFamily: "Poppins-Regular",
            color: "#A7AFB7",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontFamily: "Poppins-Regular", color: "#777" }}>
              Current Balance
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                color: "#FFF",
                fontSize: 40,
                marginTop: 15,
              }}
            >
              40,059.83
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                color: "#A7AFB7",
                fontSize: 15,
              }}
            >
              $468,554.23
            </Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#1B232A",
              width: 40,
              height: 40,
              borderRadius: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name="eye-off-outline"
              size={25}
              color="#7777"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.menuWrapper}>
          {menus.map((menu, index) => (
            <TouchableOpacity
              onPress={() => setActive(menu.name)}
              style={[
                styles.btn,
                active == menu.name
                  ? { backgroundColor: "#5ED5A8" }
                  : { backgroundColor: "#1E272E" },
              ]}
              key={index}
            >
              <Text
                style={[
                  { fontFamily: "Poppins-Regular", fontSize: 16 },
                  active == menu.name
                    ? { color: "#171D22" }
                    : { color: "#777" },
                ]}
              >
                {menu.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ImageBackground>

      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {coins.map((market, index) => (
          <View key={index}>
            <ListMarket market={market} screen="Wallet" />
            <View style={styles.divider}></View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B232A",
  },
  menuWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  divider: {
    marginHorizontal: 25,
    height: 0.4,
    backgroundColor: "#FFF",
    opacity: 0.1,
  },
});
