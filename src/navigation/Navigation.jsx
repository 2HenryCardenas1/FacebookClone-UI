import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import React from "react";
import { TouchableOpacity, View, ViewBase } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { HomeHeader } from "../components/NavigationHeader/HomeHeader";
import { Home, Video } from "../screens";
import { HomeScreen, VideoScreen } from "../utils/constants";

const Tab = createMaterialTopTabNavigator();

function MyTabBar({ state, descriptors, navigation, position }) {
  const insets = useSafeAreaInsets();

  const RenderLogo = ({ routeName, isFocused }) => {
    switch (routeName) {
      case HomeScreen:
        return (
          <MaterialIcons
            name="home"
            size={25}
            color={isFocused ? "#1877F2" : "black"}
          />
        );
      case VideoScreen:
        return (
          <MaterialIcons
            name="ondemand-video"
            size={25}
            color={isFocused ? "#1877F2" : "black"}
          />
        );
      case "Marketplace":
        return (
          <MaterialIcons
            name="storefront"
            size={25}
            color={isFocused ? "#1877F2" : "black"}
          />
        );
      case "Notification":
        return (
          <MaterialIcons
            name="notifications"
            size={25}
            color={isFocused ? "#1877F2" : "black"}
          />
        );
      case "Reels":
        return (
          <MaterialIcons
            name="ondemand-video"
            size={25}
            color={isFocused ? "#1877F2" : "black"}
          />
        );
      case "Menu":
        return (
          <MaterialIcons
            name="menu"
            size={25}
            color={isFocused ? "#1877F2" : "black"}
          />
        );
      default:
        return (
          <MaterialIcons
            name="home"
            size={25}
            color={isFocused ? "#1877F2" : "black"}
          />
        );
    }
  };

  return (
    <View style={{ marginTop: insets.top }}>
      {state.index === 0 && <HomeHeader />}

      <View style={{ flexDirection: "row" }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          return (
            <View style={{ height: insets.top * 1.3, flex: 1 }} key={index}>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                style={{
                  flex: 1,
                  alignItems: "center",
                  padding: 10,
                  paddingBottom: 0,
                }}
                key={index}
              >
                <View style={{ width: "100%", alignItems: "center" }}>
                  <RenderLogo routeName={route.name} isFocused={isFocused} />
                  {isFocused && (
                    <View
                      style={{
                        height: 2,
                        width: "100%",
                        backgroundColor: "#1877F2",
                        marginTop: 15,
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const Navigation = () => {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />} >
      <Tab.Screen name={VideoScreen} component={Video} />
      <Tab.Screen name={HomeScreen} component={Home} />
      <Tab.Screen name="Marketplace" component={Home} />
      <Tab.Screen name="Reels" component={Home} />
      <Tab.Screen name="Notification" component={Home} />
      <Tab.Screen name="Menu" component={Home} />
    </Tab.Navigator>
  );
};

export { Navigation };
