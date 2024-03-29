import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { BoldText, RegularText, SemiBoldText } from "../components/text";
import { MealGridColors } from "../assets/values/Colors";
import { close_round_icon, edit_icon } from "../assets/index.icon";
import { InfoField } from "../components/input/InfoField";

/**
 * @author
 * @function CheckOut
 **/
export const CheckOut = (props) => {
  const [formData, setFormData] = useState({
    name: "Md. Shefat Zeon",
    paymentMethod: "💵  Cash",
    mobile: "+8801402199906",
    address:
      "3rd floor N apartment, Bholahut palace, Baliaukur choto bot tola mor, Rajshahi",
    deliveryInstruchtion: "",
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <View style={{ marginBottom: 24 }}>
      <DeliveryAddress handleChange={handleChange} formData={formData} />
      <PaymentMethod handleChange={handleChange} formData={formData} />
      <OrderSummery />
      <PlaceOrderBtn />
    </View>
  );
};

const DeliveryAddress = ({ handleChange, formData }) => {
  const [editEnable, setEditEnable] = useState(false);
  return (
    <View style={{ paddingHorizontal: 20, marginVertical: 12 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 4,
          paddingHorizontal: 8,
        }}
      >
        <SemiBoldText style={{ fontSize: 18, color: MealGridColors.primary }}>
          Delivery Address
        </SemiBoldText>
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
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: MealGridColors.white, borderRadius: 8 }}>
        <InfoField
          labelText={"Address"}
          labelStyle={{ color: MealGridColors.gray_ignored }}
          onChangeText={(text) => handleChange("address", text)}
          value={formData?.address}
          disabled={editEnable}
          multiline={true}
          inputStyle={{
            height: 72,
            borderWidth: 1,
            borderColor: MealGridColors.bg_all_purpose,
          }}
          containerStyle={{ marginBottom: 0, paddingBottom: 0 }}
        />
        <InfoField
          labelText={"Delivery Instruction"}
          labelStyle={{ color: MealGridColors.gray_ignored }}
          onChangeText={(text) => handleChange("deliveryInstruchtion", text)}
          value={formData?.deliveryInstruchtion}
          disabled={editEnable}
          multiline={true}
          inputStyle={{
            height: 72,
            borderWidth: 1,
            borderColor: MealGridColors.bg_all_purpose,
          }}
          containerStyle={{}}
        />
      </View>
    </View>
  );
};

const PaymentMethod = ({ handleChange, formData }) => {
  const [editEnable, setEditEnable] = useState(false);
  return (
    <View style={{ paddingHorizontal: 20, marginVertical: 4 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 4,
          paddingHorizontal: 8,
        }}
      >
        <SemiBoldText style={{ fontSize: 18, color: MealGridColors.primary }}>
          Payment Method
        </SemiBoldText>
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
        </TouchableOpacity>
      </View>

      <View>
        <InfoField
          // labelText={"Select Payment Method"}
          // labelStyle={{ color: MealGridColors.gray_ignored }}
          onChangeText={(text) => handleChange("paymentMethod", text)}
          value={formData?.paymentMethod}
          disabled={false}
          multiline={true}
        />
      </View>
    </View>
  );
};

const OrderSummery = () => {
  return <View></View>;
};

const PlaceOrderBtn = () => {
  return <View></View>;
};
