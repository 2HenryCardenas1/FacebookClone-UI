import { Avatar, Icon, Input } from "@rneui/themed";
import React from "react";
import { View } from "react-native";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5,
      }}
    >
      <Avatar
        source={require("../../assets/images/imageProfile.jpg")}
        containerStyle={{
          width: 50,
          height: 50,
        }}
        avatarStyle={{
          width: 50,
          height: 50,
          borderRadius: 50,
          borderColor: "#F0F2F5",
          borderWidth: 1,
        }}
      />
      <View
        style={{
          flex: 1,
        }}
      >
        <Input
          placeholder="What you are thinking?"
          style={{
            backgroundColor: "#F0F2F5",
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 5,
            fontSize: 15,
            height: 50,
          }}
          inputContainerStyle={{
            borderColor: "transparent",
          }}
          containerStyle={{
            height: 50,
          }}
          multiline={true}
        />
      </View>

      <Icon name="camera" type="ionicon" color="#1877F2" size={30} />
    </View>
  );
};

export { Header };
