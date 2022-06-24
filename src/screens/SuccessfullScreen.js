import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SuccessfullScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      <ImageBackground
        source={require("../../assets/images/background-successfull.png")}
        style={{ height: "100%", width: "100%" }}
      >
        <SafeAreaView
          style={{ alignItems: "center", justifyContent: "center", flex: 1, marginHorizontal: 25, }}
        >
          <Image
            source={require("../../assets/images/illustrations/ill-4.png")}
            style={{ width: 90, height: 200 }}
          />
          <Text style={styles.header}>
            Your accoung has been{"\n"}
            succesfully created!
          </Text>

          <TouchableOpacity
            style={styles.signInBtn}
            onPress={() => navigation.navigate("MainApp")}
          >
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SuccessfullScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B232A",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontFamily: "Poppins-Bold",
    fontSize: 25,
    color: "#FFF",
    textAlign: "center",
    marginTop: 30,
  },
  signInBtn: {
    backgroundColor: "#5ED5A8",
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: "center",
    borderRadius: 15,
    marginTop: 30,
    width: '100%',
  },
  btnText: {
    color: "#171D22",
    fontFamily: "Poppins-Regular",
    fontSize: 15,
  },
});
