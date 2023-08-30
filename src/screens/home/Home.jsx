import React from "react";

import { ScrollView } from "react-native";
import { Header, States } from "../../components";
import { Publication } from "../../components/Publication";
const Home = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 5,
        paddingTop: 10,
      }}
    >
      <Header />
      <States />

      <Publication />

    </ScrollView>
  );
};

export { Home };
