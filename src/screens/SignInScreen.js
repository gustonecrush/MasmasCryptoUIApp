import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SwitchUsersSign from "../components/SwitchUsersSign";
import { StatusBar } from "expo-status-bar";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      <ImageBackground
        source={require("../../assets/images/background-signin.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          {/* Close Button */}
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => navigation.goBack()}
          >
            <MaterialCommunityIcons name="close" size={28} color={"#777777"} />
          </TouchableOpacity>
          <SwitchUsersSign />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B232A",
    flex: 1,
  },
  closeBtn: {
    marginHorizontal: 25,
  },
});
