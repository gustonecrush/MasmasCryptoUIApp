import { useFonts } from "expo-font";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const ListRecentActivity = ({ recent }) => {
  const [loaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.col1}>
        {recent.status == "Filled" ? (
          <Image source={require("../../assets/images/lb.png")} />
        ) : (
          <Image source={require("../../assets/images/ls.png")} />
        )}

        <View style={styles.textWrapper}>
          <Text
            style={{ color: "#FFF", fontFamily: "Poppins-Bold", fontSize: 16 }}
          >
            {recent.title}
          </Text>
          <Text style={{ color: "#777777", fontFamily: "Poppins-Regular" }}>
            <Text>Amout</Text>
            {"\n"}
            <Text>Price</Text>
            {"\n"}
            <Text>Status</Text>
          </Text>
        </View>
      </View>

      <View style={styles.col2}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#777777",
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              marginBottom: 3,
            }}
          >
            {recent.date}
          </Text>
          <Feather name="chevron-right" size={15} color="#777777" />
        </TouchableOpacity>

        <Text>
          <Text style={styles.textInfo}>
            {recent.amount}
            <Text style={{ color: "#FFF" }}> / 0.49975</Text>
          </Text>
          {"\n"}
          <Text style={styles.textInfo}>{recent.price}.00</Text>
          {"\n"}
          <Text
            style={[
              styles.textInfo,
              recent.status == "Filled"
                ? { color: "#5ED5A8" }
                : { color: "#DD4B4B" },
            ]}
          >
            {recent.status}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default ListRecentActivity;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 25,
  },
  col1: {
    flexDirection: "row",
  },
  textWrapper: {
    marginLeft: 10,
  },
  textInfo: {
    textAlign: "right",
    color: "#777777",
  },
});
