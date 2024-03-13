import React, { useState } from "react";
import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import { BoldText, RegularText, SemiBoldText } from "../components/text";
import { MealGridColors } from "../assets/values/Colors";
import { TextInputCustom } from "../components/input/TextInputCustom";
import { close_round_icon, edit_icon } from "../assets/index.icon";
import { FormSubmitButton } from "../components/button/FormSubmitButton";

/**
 * @author
 * @function Profile
 **/
export const Profile = (props) => {
  const { width, height } = Dimensions.get("window");

  const [editEnable, setEditEnable] = useState(false);
  const [formData, setFormData] = useState({
    name: "Md. Shefat Zeon",
    email: "mdshefatzeon@gmail.com",
    mobile: "+8801402199906",
    address:
      "3rd floor N apartment, Bholahut palace, Baliaukur choto bot tola mor, Rajshahi",
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
          paddingHorizontal: 8,
        }}
      >
        <SemiBoldText style={{ fontSize: 18 }}>Personal Details</SemiBoldText>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 6,
            // borderWidth: 1,
            // borderColor: "green",
          }}
          onPress={() => setEditEnable(!editEnable)}
        >
          {editEnable ? (
            <BoldText style={{ fontSize: 18, color: MealGridColors.primary }}>
              Close
            </BoldText>
          ) : (
            <Image
              source={editEnable ? close_round_icon : edit_icon}
              style={{
                height: 20,
                width: 20,
                tintColor: MealGridColors.primary,
              }}
            />
          )}

          {/* <Image
            source={editEnable ? close_round_icon : edit_icon}
            style={{
              height: 20,
              width: 20,
              tintColor: MealGridColors.primary,
            }}
          /> */}
        </TouchableOpacity>
      </View>

      <View>
        <InfoField
          labelText={"Full Name"}
          onChangeText={(text) => handleChange("name", text)}
          value={formData?.name}
          disabled={editEnable}
        />
        <InfoField
          labelText={"Email"}
          onChangeText={(text) => handleChange("email", text)}
          value={formData?.email}
          disabled={editEnable}
        />
        <InfoField
          labelText={"Mobile"}
          onChangeText={(text) => handleChange("mobile", text)}
          value={formData?.mobile}
          disabled={editEnable}
        />
        <InfoField
          labelText={"Address"}
          onChangeText={(text) => handleChange("address", text)}
          value={formData?.address}
          disabled={editEnable}
        />

        {editEnable && (
          <FormSubmitButton
            btnText={"Update"}
            style={{ marginBottom: 16, marginTop: 8 }}
            onPress={() => {}}
          />
        )}
      </View>
    </View>
  );
};

const InfoField = ({
  labelText,
  value,
  onChangeText,
  disabled,
  inputStyle,
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
      <RegularText style={{ fontSize: 14, marginLeft: 14 }}>
        {labelText}
      </RegularText>
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
        disabled={disabled}
      />
    </View>
  );
};
