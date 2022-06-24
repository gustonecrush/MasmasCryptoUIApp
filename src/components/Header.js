import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const iconsNotTrade = [
  {
    id: 1,
    name: "Search",
    icon: require("../../assets/images/icons/search.png"),
  },
  {
    id: 2,
    name: "Scanner",
    icon: require("../../assets/images/icons/scanner.png"),
  },
  {
    id: 3,
    name: "Notifications",
    icon: require("../../assets/images/icons/notification.png"),
  },
];

const iconsInTrade = [
  {
    id: 1,
    name: "Icon-1",
    icon: require("../../assets/images/icons/icon1.png"),
  },
  {
    id: 2,
    name: "Icon-2",
    icon: require("../../assets/images/icons/icon2.png"),
  },
  {
    id: 3,
    name: "Icon-3",
    icon: require("../../assets/images/icons/icon3.png"),
  },
];

const Header = ({ screen }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Image
          source={require("../../assets/images/user.png")}
          style={{ width: 45, height: 45, borderRadius: 100 }}
        />
      </TouchableOpacity>

      <View style={styles.iconWrapper}>
        {screen !== "Trade"
          ? iconsNotTrade.map((icon, index) => (
              <TouchableOpacity key={index}>
                <Image source={icon.icon} style={{ height: 38, width: 38 }} />
              </TouchableOpacity>
            ))
          : iconsInTrade.map((icon, index) => (
              <TouchableOpacity key={index}>
                <Image
                  source={icon.icon}
                  style={[
                    { height: 23, width: 23 },
                    icon.id == 3 ? { marginRight: 5 } : { marginRight: 15 },
                  ]}
                />
              </TouchableOpacity>
            ))}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    shadowColor: "#161C22",
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 16,
    backgroundColor: "#1B232A",
    paddingTop: 50,
    paddingBottom: 15,
  },
  iconWrapper: {
    flexDirection: "row",
  },
});
