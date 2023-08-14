import React from "react";
import {View} from "react-native";
import {ContentPublication} from "./ContentPublication";
import {DetailsPublication} from "./DetailsPublication";
import {HeaderPublication} from "./HeaderPublication";

const Publication = () => {
  return (
    <View
      style={{borderTopColor: "#dddddd", borderTopWidth: 1, marginBottom: 5}}
    >
      <HeaderPublication />
      <DetailsPublication />
      <ContentPublication />
    </View>
  );
};

export {Publication};
