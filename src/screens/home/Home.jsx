import React from "react";
import {View} from "react-native";

import {Header, States} from "../../components";
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
      <States />
    </View>
  );
};

export {Home};
