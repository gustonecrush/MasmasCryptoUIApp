import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
    if (label === "Home")
      return isFocused ? (
        <Image source={require("../../assets/images/icons/home-active.png")} />
      ) : (
        <Image source={require("../../assets/images/icons/home.png")} />
      );
    if (label === "Market")
      return isFocused ? (
        <Image
          source={require("../../assets/images/icons/market-active.png")}
          style={styles.activeIcon}
        />
      ) : (
        <Image source={require("../../assets/images/icons/market.png")} />
      );
    if (label === "Trades")
      return isFocused ? (
        <Image
          source={require("../../assets/images/icons/trade-active.png")}
          style={styles.activeIcon}
        />
      ) : (
        <Image source={require("../../assets/images/icons/trades.png")} />
      );
    if (label === "Activity")
      return isFocused ? (
        <Image
          source={require("../../assets/images/icons/activity-active.png")}
          style={styles.activeIcon}
        />
      ) : (
        <Image source={require("../../assets/images/icons/activity.png")} />
      );
    if (label === "Wallet")
      return isFocused ? (
        <Image
          source={require("../../assets/images/icons/wallet-active.png")}
          style={styles.activeIcon}
        />
      ) : (
        <Image source={require("../../assets/images/icons/wallet.png")} />
      );
    <Image
      source={require("../../assets/images/icons/home-active.png")}
      style={styles.activeIcon}
    />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: (isFocused) => ({
    fontSize: 12,
    marginTop: 8,
    color: isFocused ? "#C1C7CD" : "#777777",
  }),
  activeIcon: {
    shadowColor: "#5ED5A8",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    borderRadius: 10,
  },
});
