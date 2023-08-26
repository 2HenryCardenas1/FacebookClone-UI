import {Divider, Icon} from "@rneui/themed";
import React from "react";
import {Text, View} from "react-native";

function Reactions() {
  return (
    <View
      style={{
        borderColor: "red",
        borderWidth: 2,
        marginBottom: 5,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
        >
          <Icon
            name="thumbs-up"
            size={18}
            type="font-awesome-5"
            color={"#1877F2"}
            solid
          />
          <Text>15</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Text style={{color: "gray"}}>10 comments •</Text>
          <Text style={{color: "gray"}}>15 shared •</Text>
          <Text style={{color: "gray"}}>100 viwers</Text>
        </View>
      </View>

      <Divider style={{marginVertical: 5}} />

      <View style={{paddingVertical: 5}}>
        <IconsRactions name="thumbs-up" title="Like" />
        <IconsRactions name="comment-alt" title="Comment" />
      </View>
    </View>
  );
}

const IconsRactions = ({name, title}) => {
  return (
    <View style={{flexDirection: "row", gap: 5, alignItems: "center"}}>
      <Icon name={name} size={18} type="font-awesome-5" color={"gray"} />
      <Text style={{color: "gray"}}>{title}</Text>
    </View>
  );
};

export {Reactions};
