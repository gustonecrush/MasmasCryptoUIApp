import { useFonts } from "expo-font";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import ListRecentActivity from "../components/ListRecentActivity";
import MenuActivity from "../components/MenuActivity";

const menus = [
  {
    id: 1,
    name: "Deposit",
    image: require("../../assets/images/icons/deposit-icon.png"),
    border: true,
  },
  {
    id: 2,
    name: "Withdrawals",
    image: require("../../assets/images/icons/withdrawals.png"),
    border: true,
  },
  {
    id: 3,
    name: "Buy Order",
    image: require("../../assets/images/icons/buy.png"),
    border: false,
  },
];

const recents = [
  {
    id: 1,
    title: "BTC/BUSD",
    date: "2021-08-02 04:39:26",
    amount: 0.49975,
    price: 2652.0,
    status: "Filled",
  },
  {
    id: 2,
    title: "BTC/BUSD",
    date: "2021-08-02 04:39:26",
    amount: 0.49975,
    price: 2652.0,
    status: "Cancelled",
  },
  {
    id: 3,
    title: "BTC/BUSD",
    date: "2021-08-02 04:39:26",
    amount: 0.49975,
    price: 2652.0,
    status: "Filled",
  },
  {
    id: 4,
    title: "BTC/BUSD",
    date: "2021-08-02 04:39:26",
    amount: 0.49975,
    price: 2652.0,
    status: "Cancelled",
  },
];

const ActivityScreen = () => {
  const [loaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Menu */}
      <View style={styles.menuWrapper}>
        {menus.map((menu, index) => (
          <View key={index}>
            <MenuActivity menu={menu} />
            {!menu.border ? null : <View style={styles.divider}></View>}
          </View>
        ))}
      </View>

      {/* Recent Activity */}
      <View style={styles.recentWrapper}>
        {/* Header */}
        <Text
          style={{ fontFamily: "Poppins-Bold", color: "white", fontSize: 20 }}
        >
          Recent Activity
        </Text>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          {recents.map((recent, index) => (
            <View key={index}>
              <ListRecentActivity recent={recent} />
              <View style={styles.divider}></View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B232A",
  },
  menuWrapper: {
    marginVertical: 25,
    marginHorizontal: 20,
    backgroundColor: "#161C22",
    borderRadius: 15,
  },
  divider: {
    borderRadius: 5,
    height: 0.4,
    backgroundColor: "#FFF",
    opacity: 0.1,
  },
  recentWrapper: {
    marginHorizontal: 25,
  },
});
