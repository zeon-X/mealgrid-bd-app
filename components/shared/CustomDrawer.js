import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { BoldText, RegularText } from "../text";
import { MealGridColors } from "../../assets/values/Colors";
import { DrawerNavData } from "../../assets/values/DrawerNavData";
import { logout_icon } from "../../assets/index.icon";
import { OpenModalToNav } from "./OpenModalToNav";

/**
 * @author
 * @function CustomDrawer
 **/

export const CustomDrawer = (props) => {
  const [route, setRoute] = useState(null);
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <View
          style={{
            padding: 20,
            backgroundColor: MealGridColors?.primary,
            marginTop: -4,
          }}
        >
          <Image
            source={require("../../assets/images/user.jpg")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
              borderWidth: 2,
              borderColor: "#fff",
            }}
          />
          <BoldText
            style={{
              fontSize: 18,
              marginBottom: 5,
              color: MealGridColors.white,
            }}
          >
            Md. Shefat Zeon
          </BoldText>
          <View style={{ flexDirection: "row" }}>
            <BoldText
              style={{
                marginRight: 5,
                fontSize: 12,
                color: MealGridColors.white,
              }}
            >
              mdshefatzeon@gmail.com
            </BoldText>
          </View>
        </View>

        <View style={{ backgroundColor: "#fff", paddingTop: 10 }}>
          {DrawerNavData?.map((nav, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  paddingVertical: 16,
                  paddingHorizontal: 18,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
                onPress={() => {
                  setRoute(nav);
                  setVisible(true);
                }}
              >
                <Image
                  source={nav?.icon}
                  style={{
                    height: 22,
                    width: 22,
                    // borderWidth: 1,
                    // borderColor: "green",
                  }}
                />
                <RegularText
                  style={{
                    fontSize: 15,
                    marginLeft: 5,
                  }}
                >
                  {nav?.name}
                </RegularText>
              </TouchableOpacity>
            );
          })}
        </View>
      </DrawerContentScrollView>

      <OpenModalToNav
        visible={visible}
        onRequestClose={() => {
          setVisible(false);
          setRoute(null);
        }}
        route={route}
      />

      <View style={{ padding: 16, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            paddingVertical: 16,
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            paddingLeft: 4,
          }}
        >
          {/* <Ionicons name="exit-outline" size={22} /> */}
          <Image
            source={logout_icon}
            style={{
              height: 22,
              width: 22,
              // borderWidth: 1,
              // borderColor: "green",
            }}
          />
          <RegularText
            style={{
              fontSize: 15,
            }}
          >
            Log Out
          </RegularText>
        </TouchableOpacity>
      </View>
    </View>
  );
};
