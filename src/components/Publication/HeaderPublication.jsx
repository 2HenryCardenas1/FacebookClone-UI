import {Avatar} from "@rneui/themed";
import React from "react";
import {Text, View} from "react-native";

const HeaderPublication = () => {
  return (
    <View style={{flexDirection: "row", marginBottom: 5}}>
      <Avatar
        source={require("../../assets/images/imageProfile.jpg")}
        size={"medium"}
        avatarStyle={{width: "100%", height: "100%",borderRadius: 5,}}
        containerStyle={{
          borderColor: "#E5E5E5",
          borderWidth: 1,
          borderRadius: 5,
        }}
      />
      <View style={{flexDirection: "column", marginLeft: 10}}>
        <Text style={{fontWeight: "bold", fontSize: 18}}>
          Nombre de usuario
        </Text>
        <Text style={{fontSize: 15, color: "gray", fontWeight: "bold"}}>
          14 august 2022
        </Text>
      </View>
    </View>
  );
};

export {HeaderPublication};
