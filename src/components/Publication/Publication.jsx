import React from "react";
import { View } from "react-native";
import { ContentPublication } from "./ContentPublication";
import { DetailsPublication } from "./DetailsPublication";
import { HeaderPublication } from "./HeaderPublication";
import { Reactions } from "./Reactions";
import { Divider } from "@rneui/themed";

const Publication = () => {
  return (
    <View
      style={{ marginBottom: 15 }}
    >
      <Divider style={{ marginVertical: 5, height: 2, backgroundColor: 'gray' }} />
      <HeaderPublication />
      <DetailsPublication />
      <ContentPublication />
      <Reactions />
    </View>
  );
};

export { Publication };
