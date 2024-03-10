import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { BoldText, MediumText, RegularText, SemiBoldText } from "../text";
import { MealGridColors } from "../../assets/values/Colors";
import { DrawerNavData } from "../../assets/values/DrawerNavData";

/**
 * @author
 * @function CustomDrawer
 **/

export const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <View
          style={{
            padding: 20,
            backgroundColor: MealGridColors?.primary,
          }}
        >
          <Image
            source={require("../../assets/images/user-profile.jpg")}
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
              Refund account: BDT 280
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
              >
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

      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            paddingVertical: 16,
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          {/* <Ionicons name="exit-outline" size={22} /> */}
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
