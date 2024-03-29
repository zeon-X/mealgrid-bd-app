import React, { useEffect, useState } from "react";
import { View, TextInput } from "react-native";
import { SS_Semi } from "../../assets/fonts";
import * as Font from "expo-font";
import { MealGridColors } from "../../assets/values/Colors";

/**
 * @_author Md. Shefat Zeon
 * @function TextInputCustom
 **/
export const TextInputCustom = ({
  onChangeText,
  value,
  labelText,
  placeholder,
  keyboardType = "default",
  style,
  inputStyle,
  disabled,
  multiline,
}) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      SofiaSansSemi: SS_Semi,
      SofiaSansSemi: {
        uri: SS_Semi,
        display: Font.FontDisplay.FALLBACK,
      },
    }).then(() => {
      setLoaded(true);
    });
  }, []);
  return (
    <View style={[{ width: "100%" }, { ...style }]}>
      <TextInput
        style={[
          {
            paddingHorizontal: 8,
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 600,
            fontFamily: loaded ? "SofiaSansSemi" : null,
            marginHorizontal: 8,
            marginTop: 4,
          },
          { ...inputStyle },
        ]}
        multiline={multiline || false}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder || null}
        keyboardType={keyboardType}
        editable={disabled || false}
        selectTextOnFocus={disabled || false}
      />
    </View>
  );
};
