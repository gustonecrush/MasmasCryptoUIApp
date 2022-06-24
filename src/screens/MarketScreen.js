import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";
import ListMarket from "../components/ListMarket";

const switches = [
  { id: 1, name: "Convert" },
  { id: 2, name: "Spot" },
  { id: 3, name: "Margin" },
  { id: 4, name: "Flat" },
];

const markets = [
  {
    id: 1,
    name: "Bitcoin",
    company: "BTC",
    value: "32,697.05",
    score: 0.81,
    image: require("../../assets/images/markets/bitcoin-logo.png"),
  },
  {
    id: 2,
    name: "Chailink",
    company: "LINK",
    value: "32,697.05",
    score: -0.81,
    image: require("../../assets/images/markets/chailink-logo.png"),
  },
  {
    id: 3,
    name: "Cardano",
    company: "ADA",
    value: "32,697.05",
    score: 0.81,
    image: require("../../assets/images/markets/cardano-logo.png"),
  },
  {
    id: 4,
    name: "SHIBA INU",
    company: "SHIB",
    value: "32,697.05",
    score: -0.81,
    image: require("../../assets/images/markets/shib-logo.png"),
  },
  {
    id: 5,
    name: "HIFI",
    company: "MFT",
    value: "32,697.05",
    score: -0.81,
    image: require("../../assets/images/markets/hifi-logo.png"),
  },
  {
    id: 6,
    name: "REN",
    company: "REN",
    value: "32,697.05",
    score: 0.81,
    image: require("../../assets/images/markets/ren-logo.png"),
  },
];

const MarketScreen = () => {
  const [active, setActive] = useState("Spot");
  const [loaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      <Header screen={"market"} />

      <View style={styles.mainContainer}>
        <View style={styles.switchContainer}>
          {/* Switches Button */}
          {switches.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={
                active == item.name
                  ? styles.switchBtn(item.name)
                  : styles.switchBtn()
              }
              onPress={() => setActive(item.name)}
            >
              <Text
                style={
                  active == item.name
                    ? styles.switchText(item.name)
                    : styles.switchText()
                }
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* List Market */}
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {markets.map((market, index) => (
          <View key={index}>
            <ListMarket market={market} />
            <View style={styles.divider}></View>
          </View>
        ))}

        <TouchableOpacity style={{ alignItems: "center", marginTop: 40, }}>
          <Image
            source={require("../../assets/images/add-favorite-btn.png")}
            style={{ width: 280, height: 45 }}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default MarketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B232A",
  },
  switchContainer: {
    backgroundColor: "#161C22",
    marginHorizontal: 25,
    marginVertical: 25,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 15,
  },
  switchBtn: (active) => ({
    backgroundColor: active ? "#1B232A" : "transparent",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 17,
    margin: 5,
    borderRadius: 15,
  }),
  switchText: (active) => ({
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: active ? "#C1C7CD" : "#777",
  }),
  divider: {
    marginHorizontal: 25,
    height: 0.4,
    backgroundColor: "#FFF",
    opacity: 0.1,
  },
});
