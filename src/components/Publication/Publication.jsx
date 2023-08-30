import React from "react";
import { View } from "react-native";
import { ContentPublication } from "./ContentPublication";
import { DetailsPublication } from "./DetailsPublication";
import { HeaderPublication } from "./HeaderPublication";
import { Reactions } from "./Reactions";

const Publication = () => {
  return (
    <View
      style={{ marginBottom: 15 }}
    >
      <HeaderPublication />
      <DetailsPublication />
      <ContentPublication />
      <Reactions />
    </View>
  );
};

export { Publication };
