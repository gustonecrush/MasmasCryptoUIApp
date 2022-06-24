import { useFonts } from "expo-font";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const switches = [
  { id: 1, name: "Sign In" },
  { id: 2, name: "Sign Up" },
];

const SwitchUsersSign = () => {
  const [active, setActive] = useState("Sign In");

  const [loaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {/* Switches Button */}
        {switches.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.switchBtn}
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
      {active == "Sign In" ? <SignIn /> : <SignUp />}
    </View>
  );
};

export default SwitchUsersSign;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161C22",
    marginHorizontal: 25,
    marginVertical: 30,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 15,
  },
  switchBtn: {
    backgroundColor: "#1B232A",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 55,
    margin: 5,
    borderRadius: 15,
  },
  switchText: (active) => ({
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: active ? "#C1C7CD" : "#777",
  }),
});
