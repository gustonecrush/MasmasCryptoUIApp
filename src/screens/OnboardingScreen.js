import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({ navigation }) => {
  const onboardingRef = useRef < Onboarding > null;
  const [loaded] = useFonts({
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      <ImageBackground
        source={require("../../assets/images/background-onboarding.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Onboarding
          //   showNext={false}
          //   showSkip={false}
          onSkip={() => navigation.navigate("SignIn")}
          onDone={() => navigation.navigate("SignIn")}
          style={styles.wrapper}
          titleStyles={styles.heading}
          subTitleStyles={styles.desc}
          //   bottomBarHeight={140}
          //   bottomBarColor="transparent"
          bottomBarHighlight={false}
          //   showPagination={false}
          pages={[
            {
              backgroundColor: "transparent",
              title: "Travel Anytime Anywhere",
              subtitle:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore.",
              image: (
                <Image
                  source={require("../../assets/images/illustrations/ill-1.png")}
                  style={{ width: 300, height: 340 }}
                />
              ),
            },
            {
              backgroundColor: "transparent",
              title: "Save and invest at the same time",
              subtitle:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore.",
              image: (
                <Image
                  source={require("../../assets/images/illustrations/ill-2.png")}
                  style={{ width: 300, height: 340 }}
                />
              ),
            },
            {
              backgroundColor: "transparent",
              title: "Transact fast and easy",
              subtitle:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore.",
              image: (
                <Image
                  source={require("../../assets/images/illustrations/ill-3.png")}
                  style={{ width: 300, height: 340 }}
                />
              ),
            },
          ]}
        />
        {/* <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity> */}
      </ImageBackground>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B232A",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  descWrapper: {
    alignItems: "center",
    paddingHorizontal: 25,
    marginTop: 25,
  },
  heading: {
    fontFamily: "Poppins-Medium",
    fontSize: 20,
    color: "#FFF",
    marginTop: -15,
  },
  desc: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#777777",
    lineHeight: 23,
    textAlign: "center",
    paddingHorizontal: 5,
    marginTop: 5,
  },
  nextButton: {
    backgroundColor: "#5ED5A8",
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: 150,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
    position: "absolute",
    bottom: 70,
    left: 120,
  },
  nextButtonText: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#171D22",
  },
});
