import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const MenuActivity = ({ menu }) => {
  const [loaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.col}>
        <Image source={menu.image} />
        <Text style={{ fontFamily: "Poppins-Regular", color: "#C1C7CD" }}>
          {menu.name}
        </Text>
      </View>
      <Feather name="arrow-right" size={20} color="#777777" />
    </TouchableOpacity>
  );
};

export default MenuActivity;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161C22",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  col: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
