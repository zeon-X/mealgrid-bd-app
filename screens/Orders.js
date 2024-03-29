import React from "react";
import { TouchableOpacity, View } from "react-native";
import { BoldText, RegularText } from "../components/text";
import { MealGridColors } from "../assets/values/Colors";

/**
 * @author
 * @function Orders
 **/
export const Orders = (props) => {
  return (
    <View style={{ marginBottom: 24 }}>
      <DeliveryAddress />
      <PaymentMethod />
      <OrderSummery />
      <PlaceOrderBtn />
    </View>
  );
};

const DeliveryAddress = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          gap: 6,
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
            maxWidth: "80%",
          }}
        >
          <BoldText style={{ fontSize: 14 }}>{data?.rating}</BoldText>
          <RegularText
            style={{ fontSize: 12, color: MealGridColors.gray_ignored }}
          >
            {" ("}121+ reviews{")"}
          </RegularText>
        </View>
        <TouchableOpacity style={{ padding: 4 }}>
          <BoldText style={{ fontSize: 13, color: MealGridColors.primary }}>
            See Reviews
          </BoldText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PaymentMethod = () => {
  return <View></View>;
};

const OrderSummery = () => {
  return <View></View>;
};

const PlaceOrderBtn = () => {
  return <View></View>;
};
