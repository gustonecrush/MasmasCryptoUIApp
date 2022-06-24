import { useFonts } from "expo-font";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const menus = [
  { id: 1, name: "Open Order (2)" },
  { id: 2, name: "Order Books" },
  { id: 3, name: "Market Trades" },
];

const Explanator = () => {
  const [activeMenu, setActiveMenu] = useState("Order Books");
  const [loaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Menu 1 */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {menus.map((menu, index) => (
          <TouchableOpacity
            style={[
              styles.btn,
              activeMenu == menu.name
                ? { backgroundColor: "#F1F4F6" }
                : { backgroundColor: "#FFF" },
            ]}
            onPress={() => setActiveMenu(menu.name)}
            key={index}
          >
            <Text
              style={[
                styles.btnText,
                activeMenu == menu.name
                  ? { color: "#1B232A" }
                  : { color: "#A7AFB7" },
              ]}
            >
              {menu.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.divider}></View>
      {/* Menu 2 */}
      <View style={styles.menu2}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            paddingHorizontal: 50,
            borderBottomColor: "#1B232A",
            borderBottomWidth: 0.3,
          }}
        >
          <Text style={styles.textMenu}>Bid</Text>
          <Text style={styles.textMenu}>Ask</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={{ flexDirection: "row", }}>
          <View style={styles.col}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: 15,
                  lineHeight: 26,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                }}
              >
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
              </Text>

              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: 15,
                  lineHeight: 26,
                  marginLeft: 15,
                  backgroundColor: "#EFFBF6",
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  color: "#5ED5A8",
                }}
              >
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
              </Text>
            </View>
          </View>
          <View style={styles.col}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: 15,
                  lineHeight: 26,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                }}
              >
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
              </Text>

              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: 15,
                  lineHeight: 26,
                  marginLeft: 15,
                  backgroundColor: "#FCEDED",
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  color: "#DD4B4B",
                }}
              >
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
                {"\n"}
                <Text>27,486.39</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Explanator;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  btn: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontFamily: "Poppins-Regular",
    color: "#1B232A",
  },
  menu2: {
    backgroundColor: "white",
    borderTopColor: "#1B232A",
    borderTopWidth: 0.3,
  },
  divider: {
    marginHorizontal: 25,
    height: 0.4,
    backgroundColor: "#FFF",
    opacity: 0.1,
  },
  textMenu: {
    fontFamily: "Poppins-Regular",
    color: "#A7AFB7",
    fontSize: 16,
    textAlign: "center",
    // backgroundColor: 'red',
    width: "30%",
  },
});
