import {Image} from "@rneui/themed";
import React from "react";
import {View} from "react-native";
import {states} from "../../api/data";

const ContentPublication = () => {
  return (
    <View
      style={{
        marginVertical: 20,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View style={{width: "70%", marginRight: 2}}>
        <Image
          source={{uri: states[0].imagePost}}
          style={{
            width: "100%",
            aspectRatio: 1,
            resizeMode: "cover",
            height: "100%",
          }}
        />
      </View>
      <View
        style={{
          width: "30%",

          gap: 2,
        }}
      >
        <Image
          source={{uri: states[1].imagePost}}
          style={{width: "100%", height: 150, aspectRatio: 1}}
        />
        <Image
          source={{uri: states[2].imagePost}}
          style={{width: "100%", height: 150, aspectRatio: 1}}
        />
        <Image
          source={{uri: states[2].imagePost}}
          style={{width: "100%", height: 150, aspectRatio: 1}}
        />
      </View>
    </View>
  );
};

export {ContentPublication};
