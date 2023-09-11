import { View, Text, ScrollView } from "react-native";
import React from "react";
import { HeaderVideo, Publication } from "../../components";
import { STYLE_SCROLL_VIEW_SCREEN } from "../../utils/constants";

function Video() {
  return (
    <ScrollView style={STYLE_SCROLL_VIEW_SCREEN}>
      <HeaderVideo />
      <Publication
        video={"https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}
      />
      <Publication
        video={"https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}
      />
    </ScrollView>
  );
}

export { Video };
