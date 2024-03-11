import React from "react";
import { Dimensions, View } from "react-native";
import { BoldText, RegularText, SemiBoldText } from "../components/text";
import { MealGridColors } from "../assets/values/Colors";

/**
 * @author
 * @function Profile
 **/
export const Profile = (props) => {
  const { width, height } = Dimensions.get("window");
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 8,
      }}
    >
      <SemiBoldText style={{ fontSize: 18 }}>Personal Details</SemiBoldText>
    </View>
  );
};
