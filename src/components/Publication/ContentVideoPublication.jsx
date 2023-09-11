import { View, Text } from "react-native";
import React from "react";
import { Video, ResizeMode } from "expo-av";
export default function ContentVideoPublication({ video }) {
  const videoRef = React.useRef(null);
  return (
    <View
      style={{
        marginVertical: 20,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Video
        style={{ width: "100%", height: 300 }}
        source={{
          uri: video,
        }}
        ref={videoRef}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
      />
    </View>
  );
}
