import React from "react";
import { TouchableOpacity } from "react-native";
import { BoldText } from "../text";
import { MealGridColors } from "../../assets/values/Colors";

/**
 * @_author Md. Shefat Zeon
 * @function FormSubmitButton
 **/
export const FormSubmitButton = ({ onPress, btnText, btnTextStyle, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: 48,
          width: "100%",
          borderRadius: 8,
          backgroundColor: MealGridColors.primary,
        },
        style,
      ]}
    >
      <BoldText style={{ fontSize: 18, color: "#fff", ...btnTextStyle }}>
        {btnText}
      </BoldText>
    </TouchableOpacity>
  );
};
