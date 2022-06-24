import { useFonts } from "expo-font";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ListMarket = ({ market, screen }) => {
  const [loaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Market */}
      <View style={styles.marketWrapper}>
        <Image
          source={market.image}
          style={{ height: 32, width: 32, marginRight: 10 }}
        />
        <View>
          <Text
            style={{ fontFamily: "Poppins-Bold", fontSize: 15, color: "#FFF" }}
          >
            {market.name}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 15,
              color: "#777777",
            }}
          >
            {market.company}
          </Text>
        </View>
      </View>

      {/* Graphic */}
      {screen == "Wallet" ? null : market.score >= 0 ? (
        <Image
          source={require("../../assets/images/good-state.png")}
          style={{ resizeMode: "contain", width: 100 }}
        />
      ) : (
        <Image
          source={require("../../assets/images/low-state.png")}
          style={{ resizeMode: "contain", width: 100 }}
        />
      )}

      {/* Kurs */}
      <View>
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            color: "#FFF",
            textAlign: "right",
          }}
        >
          {market.value}
        </Text>
        {screen == "Wallet" ? (
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              color: "#777",
              marginTop: 3,
            }}
          >
            ${market.total}
          </Text>
        ) : (
          <Text
            style={[
              { fontFamily: "Poppins-Regular", textAlign: "right" },
              market.score >= 0 ? { color: "#5ED5A8" } : { color: "#DD4B4B" },
            ]}
          >
            {market.score}%
          </Text>
        )}
      </View>
    </View>
  );
};

export default ListMarket;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: "row",
    marginVertical: 15,
    marginHorizontal: 15,
    borderBottomColor: "#FFF",
    alignItems: "center",
    justifyContent: "space-between",
  },
  marketWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});
