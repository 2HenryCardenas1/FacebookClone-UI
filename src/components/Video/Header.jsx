import { View, Text } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

const HEADER_OPTIONS = [
  {
    title: "For you",
    selected: true,
  },
  {
    title: "Live",
    selected: false,
  },
  {
    title: "VideoGames",
    selected: false,
  },
  {
    title: "Reels",
    selected: false,
  },
  {
    title: "Popular",
    selected: false,
  },

  {
    title: "Following",
    selected: false,
  },
];

function HeaderVideo() {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Video
        </Text>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <Icon
            name="account"
            type="material-community"
            style={{
              backgroundColor: "#E4E6EB",
              borderRadius: 50,
              padding: 5,
            }}
          />

          <Icon
            name="magnify"
            type="material-community"
            style={{
              backgroundColor: "#E4E6EB",
              borderRadius: 50,
              padding: 5,
            }}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {HEADER_OPTIONS.map((item, index) => (
          <Text
            key={item.title}
            style={{
              color: item.selected ? "white" : "black",
              backgroundColor: item.selected ? "#1877F2" : "white",
              padding: 10,
              borderRadius: 50,
            }}
          >
            {item.title}
          </Text>
        ))}
      </View>
    </View>
  );
}

export { HeaderVideo };
