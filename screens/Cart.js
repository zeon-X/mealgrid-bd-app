import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { BoldText, RegularText, SemiBoldText } from "../components/text";
import { MealGridColors } from "../assets/values/Colors";
import * as Font from "expo-font";
import { SS_Reg } from "../assets/fonts";
import { top_restrurent_icon } from "../assets/index.icon";

/**
 * @author
 * @function Cart
 **/

export const Cart = ({ data }) => {
  const [markedDates, setMarkedDates] = useState({});
  const { selected_package, shop_data } = data;
  // console.log("shop_data: ", shop_data);
  // console.log("selected_package: ", selected_package);

  return (
    <View style={{}}>
      <DateSelect markedDates={markedDates} setMarkedDates={setMarkedDates} />

      <CustomizePlan markedDates={markedDates} menu={selected_package?.menu} />
    </View>
  );
};

const DateSelect = ({ markedDates, setMarkedDates }) => {
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

  const sortAndStoreDate = (newDate) => {
    // Check if the new date already exists in the state
    if (markedDates[newDate]) {
      // Remove the date from the state
      const { [newDate]: removedDate, ...remainingDates } = markedDates;
      setMarkedDates(remainingDates);
    } else {
      // Combine the new date with existing markedDates
      const combinedDates = {
        ...markedDates,
        [newDate]: { color: "#70d7c7", textColor: "white" },
      };

      // Sort the dates in ascending order
      const sortedDates = Object.keys(combinedDates).sort((a, b) => {
        return new Date(a) - new Date(b);
      });

      // Create a new object with sorted dates and their corresponding colors/textColors
      const formattedDates = sortedDates.reduce((acc, date) => {
        acc[date] = combinedDates[date];
        return acc;
      }, {});

      // Update the state with sorted and formatted dates
      setMarkedDates(formattedDates);
    }
  };
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

          <RegularText
            style={{ fontSize: 14, color: MealGridColors.gray_ignored }}
          >
            Select upto 30 days!
          </RegularText>
        </View>
        <BoldText style={{ fontSize: 14, color: MealGridColors.primary }}>
          Customize your plan!
        </BoldText>
      </View>
      <Calendar
        style={{
          borderRadius: 12,
          padding: 17,
          marginTop: 6,
        }}
        theme={{
          backgroundColor: MealGridColors.white,
          arrowColor: MealGridColors.gray_ignored,
          monthTextColor: MealGridColors.gray_ignored,
          indicatorColor: MealGridColors.primary,
          textDayFontSize: 10,
          textMonthFontSize: 12,
          textDayHeaderFontSize: 10,
          textDayFontFamily: loaded ? "SofiaSansReg" : null,
          textMonthFontFamily: loaded ? "SofiaSansReg" : null,
          textDayHeaderFontFamily: loaded ? "SofiaSansReg" : null,
        }}
        minDate={today_date}
        maxDate={future_date}
        markingType={"period"}
        markedDates={markedDates}
        onDayPress={(day) => {
          // console.log("selected day", day);
          sortAndStoreDate(day?.dateString);
        }}
      />
    </View>
  );
};

const CustomizePlan = ({ markedDates, menu }) => {
  const dates = getDateAndDayNameAndMenu(markedDates, menu);
  console.log(dates);
  return (
    <View
      style={{
        marginHorizontal: 20,
        backgroundColor: MealGridColors.white,
        borderRadius: 8,
        paddingHorizontal: 4,
        paddingVertical: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <View
          style={{
            width: "30%",
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
            Selected Date
          </SemiBoldText>
        </View>
        <View
          style={{
            width: "40%",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <SemiBoldText
            style={{
              fontSize: 14,
              color: MealGridColors.black,
              width: "40%",
            }}
          >
            Meal
          </SemiBoldText>
        </View>
        <View
          style={{
            width: "30%",
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
            Cost
          </SemiBoldText>
        </View>
      </View>

      {dates?.map((d, ind) => {
        return (
          <View
            key={ind}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <View
              style={{
                width: "30%",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <RegularText
                style={{
                  fontSize: 14,
                  color: MealGridColors.black,
                }}
              >
                {d?.date}
              </RegularText>
            </View>
            <View
              style={{
                width: "40%",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <RegularText
                style={{
                  fontSize: 14,
                  color: MealGridColors.black,
                  width: "40%",
                }}
              >
                {d?.dayName}
              </RegularText>
            </View>
            <View
              style={{
                width: "30%",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <RegularText
                style={{
                  fontSize: 14,
                  color: MealGridColors.black,
                }}
              >
                Cost
              </RegularText>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const getDateAndDayNameAndMenu = (markedDates, menu) => {
  // console.log(menu);
  const dateAndDayNameAndMenuArray = [];

  // Loop through each date in the markedDates object
  for (const date in markedDates) {
    if (markedDates.hasOwnProperty(date)) {
      // Convert the date string to a Date object
      const currentDate = new Date(date);

      // Get the day name from the Date object
      const dayName = currentDate.toLocaleDateString("en-US", {
        weekday: "long",
      });

      // Find the menu object corresponding to the dayName
      const menuObject = menu.find((item) => item.day_name === dayName);

      // Add the { date, dayName, menu } object to the array if menuObject is found
      if (menuObject) {
        dateAndDayNameAndMenuArray.push({ date, menu: menuObject });
      }
    }
  }

  return dateAndDayNameAndMenuArray;
};
