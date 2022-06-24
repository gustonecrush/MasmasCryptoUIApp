import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

const SignUpMobileScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      <ImageBackground
        source={require("../../assets/images/background-signin.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => navigation.goBack()}
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={28}
                color={"#777777"}
              />
            </TouchableOpacity>
            <Text style={styles.textHeading}>Sign Up</Text>
          </View>

          {/* Regis Section */}
          <View style={styles.regisWrapper}>
            <Text style={styles.regisHeader}>Register with mobile</Text>
            <Text style={styles.regisDesc}>
              Please type your number, then we’ll send a verification code for
              authentication.
            </Text>
            <View style={styles.formInput}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.label}>Mobile Number</Text>
              </View>

              <TextInput
                placeholder="Enter your mobile"
                placeholderTextColor={"#777777"}
                style={styles.textInput}
                autoComplete={false}
                autoCorrect={false}
                autoFocus={true}
              />

              <TouchableOpacity style={styles.signInBtn} onPress={() => navigation.navigate('OTP')}>
                <Text style={styles.btnText}>Send OTP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SignUpMobileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B232A",
    flex: 1,
  },
  closeBtn: {
    marginHorizontal: 25,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  textHeading: {
    fontFamily: "Poppins-Bold",
    color: "#A7AFB7",
    fontSize: 20,
  },
  regisWrapper: {
    marginHorizontal: 25,
    marginTop: 30,
  },
  regisHeader: {
    fontFamily: "Poppins-Bold",
    color: "#FFF",
    fontSize: 27,
    marginBottom: 15,
  },
  regisDesc: {
    fontFamily: "Poppins-Regular",
    color: "#A7AFB7",
    fontSize: 14,
    marginBottom: 40,
  },
  formInput: {
    marginTop: 20,
  },
  label: {
    color: "#A7AFB7",
    fontFamily: "Poppins-Regular",
    fontSize: 13,
  },
  textInput: {
    fontFamily: "Poppins-Regular",
    backgroundColor: "#161C22",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 10,
    color: "#FFF",
  },
  signInBtn: {
    backgroundColor: "#5ED5A8",
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: "center",
    borderRadius: 15,
    marginTop: 30,
  },
  btnText: {
    color: "#171D22",
    fontFamily: "Poppins-Regular",
    fontSize: 15,
  },
});
