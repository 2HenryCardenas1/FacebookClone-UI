import React from "react";

import { ScrollView } from "react-native";
import { Header, States } from "../../components";
import { Publication } from "../../components/Publication";
import { STYLE_SCROLL_VIEW_SCREEN } from "../../utils/constants";
const Home = () => {


  return (
    <ScrollView
      style={STYLE_SCROLL_VIEW_SCREEN}
    >
      <Header />
      <States />

      <Publication />
      <Publication />

    </ScrollView>
  );
};

export { Home };
