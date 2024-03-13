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
import { left_arrow_icon } from "../../assets/index.icon";
import { MealGridColors } from "../../assets/values/Colors";

export const SpecialModal = ({ visible, onRequestClose, route }) => {
  const Component = route?.children || (() => null);

  //   console.log("route: ", route);

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
            marginTop: Platform?.OS === "ios" ? 32 : 0,
            // backgroundColor: "#fff",
            borderBottomWidth: 1,
            borderBottomColor: MealGridColors.bg_all_purpose,
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
              source={left_arrow_icon}
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
          <Component data={route?.data} />
        </ScrollView>
      </View>
    </Modal>
  );
};
