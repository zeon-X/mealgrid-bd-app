import React from "react";
import { View } from "react-native";
import { RegularText } from "../text";
import { MealGridColors } from "../../assets/values/Colors";
import { TextInputCustom } from "../input/TextInputCustom";

export const InfoField = ({
  containerStyle,
  labelText,
  labelStyle,
  value,
  onChangeText,
  disabled,
  inputStyle,
  multiline,
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: MealGridColors.white,
          borderRadius: 8,
          paddingTop: 18,
          paddingBottom: 8,
          marginBottom: 10,
          ...containerStyle,
        },
        {
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.01,
          shadowRadius: 2,
          elevation: 10,
        },
      ]}
    >
      {labelText && (
        <RegularText style={{ fontSize: 14, marginLeft: 14, ...labelStyle }}>
          {labelText}
        </RegularText>
      )}
      <TextInputCustom
        value={value}
        onChangeText={onChangeText}
        style={{
          backgroundColor: MealGridColors.white,
        }}
        inputStyle={{
          height: 44,
          backgroundColor: disabled
            ? MealGridColors.offWhite_2
            : MealGridColors.white,
          ...inputStyle,
        }}
        multiline={multiline || false}
        disabled={disabled}
      />
    </View>
  );
};
