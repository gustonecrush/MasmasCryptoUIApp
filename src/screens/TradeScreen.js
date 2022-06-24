import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";
import { AntDesign } from "@expo/vector-icons";
import Explanator from "../components/Explanator";
import Choose from "../components/Choose";
import { StatusBar } from "expo-status-bar";

const switches = [
  { id: 1, name: "Convert" },
  { id: 2, name: "Spot" },
  { id: 3, name: "Margin" },
  { id: 4, name: "Flat" },
];

const TradeScreen = () => {
  const [active, setActive] = useState("Spot");
  const [modalVisible, setModalVisible] = useState(false);
  const [loaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      {/* Header */}
      <Header screen={"Trade"} />

      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {/* Menu */}
        <View style={styles.mainContainer}>
          <View style={styles.switchContainer}>
            {/* Switches Button */}
            {switches.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={
                  active == item.name
                    ? styles.switchBtn(item.name)
                    : styles.switchBtn()
                }
                onPress={() => setActive(item.name)}
              >
                <Text
                  style={
                    active == item.name
                      ? styles.switchText(item.name)
                      : styles.switchText()
                  }
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Header */}
        <Image
          source={require("../../assets/images/graphic.png")}
          style={{ width: "100%", resizeMode: "contain", marginBottom: 20 }}
        />

        <View style={[styles.btnTime]}>
          <TouchableOpacity
            style={[styles.btnTimeOne, { backgroundColor: "#161D23" }]}
          >
            <Text style={[styles.btnTimeOneText]}>18.00</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnTimeOne, { backgroundColor: "#161D23" }]}
          >
            <Text style={styles.btnTimeOneText}>19.00</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnTimeOne, { backgroundColor: "#161D23" }]}
          >
            <Text style={styles.btnTimeOneText}>20.00</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnTimeOne, { backgroundColor: "#161D23" }]}
          >
            <Text style={styles.btnTimeOneText}>21.00</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnTimeOne, { backgroundColor: "#161D23" }]}
          >
            <Text style={styles.btnTimeOneText}>22.00</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnTimeOne, { backgroundColor: "#161D23" }]}
          >
            <Text style={styles.btnTimeOneText}>More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnTime}>
          <TouchableOpacity
            style={[styles.btnTimeOne, { backgroundColor: "#252E35" }]}
          >
            <Text style={[styles.btnTimeOneText, { color: "#FFF" }]}>1m</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTimeOne}>
            <Text style={styles.btnTimeOneText}>5m</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTimeOne}>
            <Text style={styles.btnTimeOneText}>15m</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTimeOne}>
            <Text style={styles.btnTimeOneText}>30m</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTimeOne}>
            <Text style={styles.btnTimeOneText}>1d</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTimeOne}>
            <Text style={styles.btnTimeOneText}>More</Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={false}
          // style={{ height: 300 }}
          style={styles.modalView}
          presentationStyle="formSheet"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Choose
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </Modal>

        <View style={styles.btnChoose}>
          <TouchableOpacity
            style={{
              backgroundColor: "#5ED5A8",
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 15,
              paddingHorizontal: 25,
            }}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.txtChoose}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#DD4B4B",
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 15,
              paddingHorizontal: 25,
            }}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.txtChoose}>Sell</Text>
          </TouchableOpacity>
        </View>
        <Explanator />
      </ScrollView>
    </View>
  );
};

export default TradeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2329",
  },
  switchContainer: {
    backgroundColor: "#161C22",
    marginHorizontal: 25,
    marginVertical: 25,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 15,
  },
  switchBtn: (active) => ({
    backgroundColor: active ? "#1B232A" : "transparent",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 17,
    margin: 5,
    borderRadius: 15,
  }),
  switchText: (active) => ({
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: active ? "#C1C7CD" : "#777",
  }),
  btnChoose: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txtChoose: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#171D22",
  },
  btnTime: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnTimeOne: {
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#1B232A",
    justifyContent: "center",
    width: "16.6667%",
  },
  btnTimeOneText: {
    fontFamily: "Poppins-Regular",
    color: "#7777",
  },
  modalView: {
    margin: 0,
    justifyContent: "flex-end",
    height: 300,
  },
  containerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  content: {
    width: "100%",
    height: "40%",
    backgroundColor: "white",
    overflow: "hidden",
  },
});
