import React, { useEffect, useState } from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { BoldText, RegularText, SemiBoldText } from "../components/text";
import { MealGridColors } from "../assets/values/Colors";
import * as Font from "expo-font";
import { SS_Reg } from "../assets/fonts";
import {
  checkbox_off_icon,
  checkbox_on_icon,
  top_restrurent_icon,
} from "../assets/index.icon";

import { useDispatch, useSelector } from "react-redux";
import { setNewMDItems, updateMDOrderItems } from "../redux/actions";
import { FormSubmitButton } from "../components/button/FormSubmitButton";
import { SpecialModal } from "../components/shared/SpecialModal";
import { CheckOut } from "./CheckOut";

/**
 * @author
 * @function Cart
 **/

export const Cart = ({ data }) => {
  const mdoState = useSelector((state) => state?.mdo);
  // console.log("mdoState: ", mdoState);
  return (
    <View style={{ marginBottom: 24 }}>
      <DateSelect mdoState={mdoState} menu={data?.selected_package?.menu} />

      {mdoState?.markedDatesOrder?.length > 0 && (
        <CustomizePlan
          menu={data?.selected_package?.menu}
          mdoState={mdoState}
        />
      )}
      <BillingInfo mdoState={mdoState} />
      {mdoState?.markedDatesOrder?.length > 0 && <CheckOutButton />}
    </View>
  );
};

const DateSelect = ({ mdoState, menu }) => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      SofiaSansReg: SS_Reg,
      SofiaSansReg: {
        uri: SS_Reg,
        display: Font.FontDisplay.FALLBACK,
      },
    }).then(() => {
      setLoaded(true);
    });
  }, []);

  // Get today's date
  let today = new Date();

  // Get the date 30 days from today
  let futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 30);

  // Convert dates to strings in YYYY-MM-DD format
  let today_date = today.toISOString().slice(0, 10);
  let future_date = futureDate.toISOString().slice(0, 10);

  return (
    <View style={{ padding: 20 }}>
      <View
        style={{
          flexDirection: "row",
          gap: 6,
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
          paddingHorizontal: 8,
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
          <Image
            source={top_restrurent_icon}
            style={{
              height: 24,
              width: 24,
              tintColor: MealGridColors.primary,
            }}
          />
          <BoldText style={{ fontSize: 16, color: MealGridColors.primary }}>
            Customize your plan!
          </BoldText>
          <BoldText style={{ fontSize: 16, color: MealGridColors.black }}>
            Select upto 30 days!
          </BoldText>
        </View>
        <BoldText
          style={{ fontSize: 14, color: MealGridColors.primary }}
        ></BoldText>
      </View>
      <Calendar
        style={{
          borderRadius: 12,
          padding: 8,
          marginTop: 6,
        }}
        theme={{
          backgroundColor: MealGridColors.white,
          arrowColor: MealGridColors.gray_ignored,
          monthTextColor: MealGridColors.black,

          textMonthFontWeight: 800,
          indicatorColor: MealGridColors.primary,
          textDayFontSize: 8,
          textMonthFontSize: 12,
          textDayHeaderFontSize: 10,
          textDayFontFamily: loaded ? "SofiaSansReg" : null,
          textMonthFontFamily: loaded ? "SofiaSansReg" : null,
          textDayHeaderFontFamily: loaded ? "SofiaSansReg" : null,
        }}
        minDate={today_date}
        maxDate={future_date}
        markingType="period"
        markedDates={mdoState?.markedDates}
        onDayPress={(day) => {
          // console.log("selected day", day);
          dispatch(
            setNewMDItems(
              day?.dateString,
              mdoState?.markedDates,
              mdoState?.markedDatesOrder,
              menu
            )
          );
        }}
      />
    </View>
  );
};

const CustomizePlan = ({ menu, mdoState }) => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        marginHorizontal: 20,
        backgroundColor: MealGridColors.white,
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 20,
        marginBottom: 12,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "30%",
            // flexDirection: "row",
            // justifyContent: "center",
          }}
        >
          <SemiBoldText
            style={{
              fontSize: 14,
              color: MealGridColors.black,
            }}
          >
            Selected Date
          </SemiBoldText>
        </View>
        <View
          style={{
            width: "50%",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <SemiBoldText
            style={{
              fontSize: 14,
              color: MealGridColors.black,
            }}
          >
            Meal
          </SemiBoldText>
        </View>
        <View
          style={{
            width: "20%",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <SemiBoldText
            style={{
              fontSize: 14,
              color: MealGridColors.black,
            }}
          >
            Cost
          </SemiBoldText>
        </View>
      </View>

      <View style={{ flexDirection: "column", gap: 32, marginTop: 24 }}>
        {mdoState?.markedDatesOrder?.map((d, ind) => {
          // Get the day name from the Date object
          const dayName = new Date(d?.date).toLocaleDateString("en-US", {
            weekday: "long",
          });

          // Find the menu object corresponding to the dayName
          const menuObject = menu.find((item) => item.day_name === dayName);

          // console.log(menuObject);
          return (
            <View
              key={ind}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "30%",
                  // flexDirection: "row",
                  // justifyContent: "center",
                }}
              >
                <View>
                  <RegularText
                    style={{
                      fontSize: 14,
                      color: MealGridColors.black,
                    }}
                  >
                    {d?.date}
                  </RegularText>
                  <RegularText
                    style={{
                      fontSize: 12,
                      color: MealGridColors.gray_ignored,
                    }}
                  >
                    {menuObject?.day_name}
                  </RegularText>
                </View>
              </View>
              <View
                style={{
                  width: "50%",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                {/* <View> */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4,
                    // marginBottom: 2,
                    // borderWidth: 1,
                    // borderColor: "red",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      let tem = mdoState?.markedDatesOrder;
                      tem[ind].order.launch = !tem[ind].order.launch;
                      dispatch(updateMDOrderItems(tem, menu));
                    }}
                  >
                    <Image
                      source={
                        d?.order?.launch === true
                          ? checkbox_on_icon
                          : checkbox_off_icon
                      }
                      style={{
                        height: 20,
                        width: 20,
                        tintColor: d?.order?.launch
                          ? MealGridColors.gray_ignored
                          : MealGridColors.bg_all_purpose,
                        // borderWidth: 1,
                        // borderColor: "red",
                      }}
                    />
                  </TouchableOpacity>

                  <RegularText
                    style={{
                      fontSize: 14,
                      color: MealGridColors.black,
                      // width: "60%",
                      // borderWidth: 1,
                      // borderColor: "red",
                    }}
                  >
                    Launch
                    {/* {menuObject?.launch?.food} */}
                  </RegularText>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    // justifyContent: "space-between",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      let tem = mdoState?.markedDatesOrder;
                      tem[ind].order.dinner = !tem[ind].order.dinner;
                      dispatch(updateMDOrderItems(tem, menu));
                    }}
                  >
                    <Image
                      source={
                        d?.order?.dinner === true
                          ? checkbox_on_icon
                          : checkbox_off_icon
                      }
                      style={{
                        height: 20,
                        width: 20,
                        tintColor: d?.order?.dinner
                          ? MealGridColors.gray_ignored
                          : MealGridColors.bg_all_purpose,
                      }}
                    />
                  </TouchableOpacity>

                  <RegularText
                    style={{
                      fontSize: 14,
                      color: MealGridColors.black,
                      // width: "60%",
                    }}
                  >
                    Dinner
                    {/* {menuObject?.dinner?.food} */}
                  </RegularText>
                </View>
                {/* </View> */}
              </View>
              <View
                style={{
                  width: "20%",
                  flexDirection: "row",
                  // justifyContent: "center",
                  justifyContent: "flex-end",
                  // alignItems: "center",
                }}
              >
                <View>
                  <RegularText
                    style={{
                      fontSize: 14,
                      color: MealGridColors.black,
                    }}
                  >
                    TK{" "}
                    {(d?.order?.launch ? menuObject?.launch?.price : 0) +
                      (d?.order?.dinner ? menuObject?.dinner?.price : 0)}
                  </RegularText>
                  <RegularText
                    style={{
                      fontSize: 12,
                      color: MealGridColors.gray_ignored,
                    }}
                  >
                    Fee Tk{" "}
                    {(d?.order?.launch ? 2 : 0) + (d?.order?.dinner ? 2 : 0)}
                  </RegularText>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const BillingInfo = ({ mdoState }) => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        backgroundColor: MealGridColors.white,
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 20,
      }}
    >
      <BoldText style={{ fontSize: 24, marginBottom: 12 }}>
        Billing Info
      </BoldText>

      <View style={{ flexDirection: "column", gap: 8 }}>
        <BillingRow
          fieldName={"Subtotal"}
          value={mdoState?.bill?.subtotal || 0}
          sign={0}
        />
        <BillingRow
          fieldName={"Delivery Charge"}
          value={mdoState?.bill?.deliveryCharge || 0}
          sign={1}
        />
        <BillingRow
          fieldName={"Platform Fee"}
          value={mdoState?.bill?.platformCharge || 0}
          sign={1}
        />
        <BillingRow
          fieldName={"VAT"}
          value={mdoState?.bill?.tax || 0}
          sign={1}
        />
        <BillingRow
          fieldName={"Discount"}
          value={mdoState?.bill?.discount || 0}
          sign={-1}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderTopWidth: 2,
            borderTopColor: MealGridColors.btnbG,
            marginTop: 8,
            paddingTop: 12,
          }}
        >
          <RegularText style={{ fontSize: 24 }}>Total:</RegularText>
          <RegularText style={{ fontSize: 24 }}>
            BDT {mdoState?.bill?.total || 0}
          </RegularText>
        </View>
      </View>
    </View>
  );
};

const BillingRow = ({ fieldName, value, sign }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <RegularText style={{ color: MealGridColors.gray_ignored }}>
        {fieldName}:
      </RegularText>
      <RegularText style={{}}>
        {sign > 0 ? "+ " : sign < 0 ? "- " : ""}BDT {value}
      </RegularText>
    </View>
  );
};

const CheckOutButton = () => {
  const [visible, setVisible] = useState(false);
  const [route, setRoute] = useState(null);
  return (
    <View
      style={{
        marginHorizontal: 20,
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 20,
      }}
    >
      <FormSubmitButton
        onPress={() => {
          setVisible(true);
          setRoute({
            // title: item?.shop_name,
            page_name: "Order",
            title: "Place your first order!",
            children: CheckOut,
            // data: { selected_package: pkg, shop_data: shop_data },
          });
        }}
        btnText={"Proceed CheckOut"}
        style={{
          marginTop: 12,
          backgroundColor: MealGridColors.primary,
        }}
        btnTextStyle={{ fontSize: 14, color: MealGridColors.white }}
      />

      <SpecialModal
        visible={visible}
        onRequestClose={() => {
          setVisible(false);
          setRoute(null);
        }}
        route={route}
      />
    </View>
  );
};
