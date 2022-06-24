import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [mobile, setMobile] = useState("Email");
  const navigation = useNavigation()

  const [loaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <View style={styles.formContainer}>
        <View style={styles.formInput}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.label}>Email</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUpMobile")}>
              <Text style={[styles.label, { color: "#5ED5A8" }]}>
                Sign Up with mobile
              </Text>
            </TouchableOpacity>
          </View>

          <TextInput
            placeholder="Enter your email"
            placeholderTextColor={"#777777"}
            style={styles.textInput}
            autoComplete={false}
            autoCorrect={false}
            autoFocus={true}
          />
        </View>
        <View style={styles.formInput}>
          <Text style={styles.label}>Password</Text>
          <View
            style={[
              styles.textInput,
              { flexDirection: "row", justifyContent: "space-between" },
            ]}
          >
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={"#777777"}
              secureTextEntry={true}
              autoComplete={false}
              autoCorrect={false}
              style={styles.password}
            />
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="eye-off-outline"
                color="#777"
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.signInBtn}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.optionText}>Or Sign Up with</Text>

        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.btnOption}>
            <Image
              source={require("../../assets/images/facebook-logo.png")}
              style={{ width: 20, height: 20, marginRight: 15 }}
            />
            <Text style={styles.optionTxt}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOption}>
            <Image
              source={require("../../assets/images/google-logo.png")}
              style={{ width: 20, height: 20, marginRight: 15 }}
            />
            <Text style={styles.optionTxt}>Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
  },
  heading: {
    color: "#FFF",
    fontFamily: "Poppins-Bold",
    fontSize: 30,
    marginTop: 5,
  },
  formContainer: {},
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
  password: {
    color: "#FFF",
    fontFamily: "Poppins-Regular",
    backgroundColor: "#161C22",
  },
  forgotPassword: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#5ED5A8",
    marginTop: 10,
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
  optionText: {
    color: "#777",
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    textAlign: "center",
    marginTop: 25,
  },
  fingerPrintContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    marginTop: 20,
  },
  fingerPrintText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#A7AFB7",
    textAlign: "center",
    marginTop: 15,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnOption: {
    paddingVertical: 17,
    paddingHorizontal: 25,
    backgroundColor: "white",
    width: 160,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 50,
    flexDirection: "row",
  },
  optionTxt: {
    fontFamily: "Poppins-Regular",
  },
});
