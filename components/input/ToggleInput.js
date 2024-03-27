import React from "react";
import { View, Switch, TouchableOpacity, Image } from "react-native";
import { MealGridColors } from "../../assets/values/Colors";
import { checkbox_off_icon, checkbox_on_icon } from "../../assets/index.icon";

/**
 * @author
 * @function ToggleInput
 **/
export const ToggleInput = ({ value, onValueChange, style }) => {
  // console.log("value: ", value);
  return (
    <View
      style={[
        {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
        style,
      ]}
    >
      {/* <Switch
        trackColor={{ false: "#767577", true: MealGridColors.primary }}
        thumbColor={value ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onValueChange}
        value={value}
        // You can adjust the scale factor as needed
        style={{ transform: [{ scaleX: 0.75 }, { scaleY: 0.7 }] }}
      /> */}

      <TouchableOpacity onPress={onValueChange}>
        <Image
          source={value ? checkbox_on_icon : checkbox_off_icon}
          style={{
            height: 24,
            width: 24,
            tintColor: value
              ? MealGridColors.primary
              : MealGridColors.bg_all_purpose,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
