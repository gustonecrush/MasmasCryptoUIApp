import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('Onboarding');
    }, 4000)
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      <ImageBackground
        source={require("../../assets/images/background-onboarding.png")}
        style={{ height: "100%", width: "100%" }}
      >
        <SafeAreaView
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Image
            source={require("../../assets/images/masmas-logo.png")}
            style={{ width: 90, height: 90 }}
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B232A",
    alignItems: "center",
    justifyContent: "center",
  },
});
