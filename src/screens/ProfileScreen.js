import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const data = [
  {
    id: 1,
    name: "Username",
    data: "Farhantsyh",
  },
  {
    id: 2,
    name: "Email",
    data: "farhann@gmail.co.id",
  },
  {
    id: 3,
    name: "Mobile Number",
    data: "+62888997722",
  },
  {
    id: 4,
    name: "Password",
    data: "*********",
  },
];

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [loaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ height: 180 }}
        source={require("../../assets/images/bg-profile.png")}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => navigation.goBack()}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color={"#777777"}
            />
          </TouchableOpacity>
          <Text style={styles.textHeading}>Profile</Text>
        </View>
        <View
          style={[
            styles.imgWrapper,
            { alignItems: "center", justifyContent: "center" },
          ]}
        >
          <Image
            source={require("../../assets/images/user.png")}
            style={styles.img}
          />
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              color: "#FFF",
              textAlign: "center",
              fontSize: 19,
              marginTop: 10,
            }}
          >
            Farhantsyh
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.detailWrapper}>
        <View style={styles.divider}></View>
        {data.map((d, index) => (
          <View key={index}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 20,
                marginHorizontal: 25,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  color: "#FFF",
                  fontSize: 16,
                }}
              >
                {d.name}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontFamily: "Poppins-Regular",
                    color: "#777",
                    fontSize: 15,
                  }}
                >
                  {d.data}
                </Text>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={20}
                    color="#777"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.divider}></View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B232A",
  },
  closeBtn: {
    marginHorizontal: 25,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  textHeading: {
    fontFamily: "Poppins-Bold",
    color: "#A7AFB7",
    fontSize: 18,
    marginLeft: -5,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 200,
  },
  imgWrapper: {
    position: "absolute",
    bottom: -80,
    alignSelf: "center",
  },
  divider: {
    marginHorizontal: 25,
    height: 0.4,
    backgroundColor: "#FFF",
    opacity: 0.1,
  },
  detailWrapper: {
    marginTop: 120,
  },
});
