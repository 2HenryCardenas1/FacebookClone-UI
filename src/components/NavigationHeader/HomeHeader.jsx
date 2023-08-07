import React from "react";
import {ImageBackground, View} from "react-native";
import FontAwnsome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const HomeHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <ImageBackground
        source={require("../../assets/images/facebookLogo.png")}
        style={{resizeMode: "contain", aspectRatio: 9 / 3, marginLeft: 10}}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          padding: 10,
          justifyContent: "space-between",
          width: 130,
        }}
      >
        <MaterialIcons
          name="add"
          size={25}
          color={"black"}
          style={{
            backgroundColor: "#E4E6EB",
            borderRadius: 50,
            padding: 5,
          }}
        />
        <MaterialIcons
          name="search"
          size={25}
          color={"black"}
          style={{
            backgroundColor: "#E4E6EB",
            borderRadius: 50,
            padding: 5,
          }}
        />
        <FontAwnsome5
          name="facebook-messenger"
          size={22}
          color={"black"}
          style={{
            backgroundColor: "#E4E6EB",
            borderRadius: 50,
            padding: 5,
          }}
        />
      </View>
    </View>
  );
};

export {HomeHeader};
