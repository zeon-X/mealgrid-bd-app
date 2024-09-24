import React from "react";
import { View, Text, StyleSheet } from "react-native";

/**
 * @author
 * @function CustomizePlan
 **/
export const CustomizePlan = (props) => {
  const { container } = styles;
  return (
    <View style={container}>
      <Text>CustomizePlan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
