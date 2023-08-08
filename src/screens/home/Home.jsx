import React from "react";
import {Text, View} from "react-native";
import {Header} from "../../components/Home/Header";
const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingTop: 10,
      }}
    >
      <Header />
      <Text>Home sassa</Text>
    </View>
  );
};

export {Home};
