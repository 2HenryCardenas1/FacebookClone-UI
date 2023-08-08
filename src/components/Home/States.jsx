import React from "react";
import {FlatList, ImageBackground, Text, View} from "react-native";
import {states} from "../../api/data";

const States = () => {
  return (
    <View
      style={{
        marginVertical: 10,
      }}
    >
      <FlatList
        data={states}
        renderItem={({item}) => (
          <View
            style={{
              width: 150,
              height: 240,

              gap: 10,
              marginRight: 10,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "column",

                justifyContent: "space-between",
              }}
            >
              <ImageBackground
                source={item.imageProfile}
                style={{
                  width: 40,
                  height: 40,
                  marginLeft: 10,
                  marginTop: 10,
                }}
                imageStyle={{
                  borderRadius: 40,
                  borderColor: "#1877F2",
                  borderWidth: 1.5,
                }}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "left",
                  marginLeft: 10,
                  marginBottom: 10,
                }}
              >
                {item.username}
              </Text>
            </View>

            <ImageBackground
              source={{uri: item.imagePost}}
              style={{
                width: 150,
                height: 240,
                resizeMode: "cover",
                position: "absolute",
                zIndex: -1,
                opacity: 0.6,
              }}
              imageStyle={{
                borderRadius: 10,
              }}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
    </View>
  );
};

export {States};
