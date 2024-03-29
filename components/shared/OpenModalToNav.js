import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  Platform,
  ScrollView,
} from "react-native";
import { BoldText } from "../text";
import { close_icon } from "../../assets/index.icon";
import { MealGridColors } from "../../assets/values/Colors";

export const OpenModalToNav = ({ visible, onRequestClose, route }) => {
  const Component = route?.children || (() => null);

  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      animationType="slide"
    >
      <View style={{ flex: 1, backgroundColor: MealGridColors.offWhite_2 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: Platform?.OS === "ios" ? 34 : 0,
            // backgroundColor: "#fff",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: 16,
              // borderWidth: 1,
              // borderColor: "red",
            }}
            onPress={onRequestClose}
          >
            <Image
              source={close_icon}
              style={{
                height: 26,
                width: 26,
                tintColor: MealGridColors.primary,
              }}
            />
          </TouchableOpacity>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: -60,
              // borderWidth: 1,
              // borderColor: "red",
            }}
          >
            <BoldText style={{ fontSize: 18 }}>{route?.title}</BoldText>
          </View>
        </View>
        <ScrollView>
          <Component />
        </ScrollView>
      </View>
    </Modal>
  );
};
