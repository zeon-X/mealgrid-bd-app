import React, { Children, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import { BoldText, RegularText, SemiBoldText } from "../components/text";
import { MealGridColors } from "../assets/values/Colors";
import {
  cart_icon,
  intersectRating,
  navbar_icon,
  search_icon,
} from "../assets/index.icon";
import { DGORegularText } from "../components/text/DelaGothicOne";
import { SpecialModal } from "../components/shared/SpecialModal";

import { Shop } from "./Shop";
import {
  storyData,
  vendorDataInTown,
  vendorDataNearby,
} from "../assets/dummyData/vendor";

/**
 * @author
 * @function Home
 **/

export const Home = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");

  const [visible, setVisible] = useState(false);
  const [route, setRoute] = useState(null);
  return (
    <View
      style={{
        width: width,
        height: height,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <HomeHeader
        width={width}
        navigation={navigation}
        style={{
          paddingBottom: 20,
          width: width,
          paddingHorizontal: 24,
          paddingTop: 24,
          backgroundColor: MealGridColors.primary,
        }}
      />
      <SearchBar
        width={width}
        style={{
          paddingBottom: 16,
          paddingHorizontal: 20,
          backgroundColor: MealGridColors.primary,
        }}
      />
      <ScrollView style={{}}>
        <StoryBar
          width={width}
          style={{
            paddingBottom: 32,
            paddingTop: 18,
            backgroundColor: MealGridColors.offWhite_2,
          }}
          storyData={storyData}
        />

        <LoadVendor
          width={width}
          style={{
            paddingBottom: 32,
            backgroundColor: MealGridColors.offWhite_2,
          }}
          caption={"Nearby meal provider"}
          vendorData={vendorDataNearby}
          onPress={(item) => {
            setVisible(true);
            setRoute({
              // title: item?.shop_name,
              title: "",
              children: Shop,
              data: item,
            });
          }}
        />

        <LoadVendor
          width={width}
          style={{
            paddingBottom: 16,
            backgroundColor: MealGridColors.offWhite_2,
          }}
          caption={"Best meal provider in town"}
          vendorData={vendorDataInTown}
          onPress={(item) => {
            setVisible(true);
            setRoute({
              title: "",
              children: Shop,
              shop_data: item,
            });
          }}
        />
      </ScrollView>

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

const HomeHeader = ({ navigation, width, style }) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 6,

          // borderWidth: 1,
          // borderColor: "red",
        },
        style,
      ]}
    >
      <TouchableOpacity
        style={{
          // borderWidth: 1,
          // borderColor: "red",
          height: 32,
          width: 32,
        }}
        onPress={() => navigation.openDrawer()}
      >
        <Image
          source={navbar_icon}
          style={{
            height: 32,
            width: 32,
            tintColor: MealGridColors.white,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          // borderWidth: 1,
          // borderColor: "red",
          width: (5 / 8) * width,
        }}
      >
        <SemiBoldText style={{ fontSize: 18, color: MealGridColors.white }}>
          Deliver to
        </SemiBoldText>
        <RegularText style={{ fontSize: 14, color: MealGridColors.white }}>
          Bholahut palace, Baliapukur choto bot-tola..
        </RegularText>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 32,
          width: 32,
          justifyContent: "center",
          alignItems: "center",
          // borderWidth: 1,
          // borderColor: "red",
        }}
      >
        <View style={{ height: 32, width: 32 }}>
          <Image
            source={cart_icon}
            style={{
              height: 32,
              width: 32,
              tintColor: MealGridColors.white,
              // borderWidth: 1,
              // borderColor: "green",
            }}
          />

          {/* <View
            style={{
              height: 8,
              width: 8,
              backgroundColor: "red",
              borderRadius: 100,
              marginTop: -28,
              marginLeft: 18,
            }}
          /> */}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const SearchBar = ({ width, style }) => {
  return (
    <View style={[{}, style]}>
      <TouchableOpacity
        style={[
          {
            // borderWidth: 1,
            // borderColor: "red",
            paddingVertical: 7,
            paddingHorizontal: 20,
            backgroundColor: MealGridColors.white,
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          },
          {
            shadowColor: "#171717",
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 20,
          },
        ]}
      >
        <Image
          source={search_icon}
          style={{
            height: 26,
            width: 26,
            tintColor: MealGridColors.gray_time,
            // tintColor: MealGridColors.primary,
            // borderWidth: 1,
            // borderColor: "red",
          }}
        />
        <RegularText style={{ color: MealGridColors.gray_time }}>
          Search for best meal provider
        </RegularText>
      </TouchableOpacity>
    </View>
  );
};

const StoryBar = ({ width, style, storyData }) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        },
        style,
      ]}
    >
      <FlatList
        data={storyData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                // borderWidth: 1,
                // borderColor: "green",

                marginLeft: index == 0 ? 20 : 6,
                marginRight: index == storyData?.length - 1 ? 20 : 6,

                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: item?.img }}
                style={{
                  height: 72,
                  width: 72,
                  borderRadius: 100,

                  borderWidth: 2.5,
                  borderColor: MealGridColors.primary,
                  marginBottom: 6,
                }}
              />
              <RegularText>{item?.title}</RegularText>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const LoadVendor = ({ width, style, caption, vendorData, onPress }) => {
  return (
    <View style={[{}, style]}>
      <BoldText
        style={{
          paddingHorizontal: 20,
          fontSize: 18,
          marginBottom: 10,
          marginLeft: 6,
        }}
      >
        {caption}
      </BoldText>

      <FlatList
        data={vendorData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                // borderWidth: 1,
                // borderColor: "green",

                marginLeft: index == 0 ? 20 : 6,
                marginRight: index == vendorData?.length - 1 ? 20 : 6,
              }}
              onPress={() => onPress(item)}
            >
              <View>
                <ImageBackground
                  source={{ uri: item?.cover_img }}
                  style={[
                    {
                      height: 158,
                      width: 234,

                      marginBottom: 6,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    },
                  ]}
                  imageStyle={{
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: "#fff",
                  }}
                >
                  {item?.status ? (
                    <View
                      style={[
                        {
                          height: 20,
                          width: 48,
                          backgroundColor: "#fff",
                          margin: 5,
                          borderRadius: 8,
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 3,
                        },
                        {
                          shadowColor: "#171717",
                          shadowOffset: { width: -2, height: 4 },
                          shadowOpacity: 0.1,
                          shadowRadius: 4,
                          elevation: 20,
                        },
                      ]}
                    >
                      <View
                        style={{
                          height: 6,
                          width: 6,
                          backgroundColor: item?.status?.bulb_color || "red",
                          borderRadius: 100,
                        }}
                      />
                      <SemiBoldText style={{ fontSize: 11 }}>
                        {item?.status?.name}
                      </SemiBoldText>
                    </View>
                  ) : (
                    <View />
                  )}
                  <View style={{ marginTop: 102, marginRight: 2 }}>
                    <ImageBackground
                      source={intersectRating}
                      style={{
                        height: 54,
                        width: 54,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        padding: 6,
                      }}
                    >
                      <DGORegularText style={{ fontSize: 20, color: "#fff" }}>
                        {item?.rating}
                      </DGORegularText>
                      <RegularText style={{ fontSize: 12, color: "#fff" }}>
                        Out of 5
                      </RegularText>
                    </ImageBackground>
                  </View>
                </ImageBackground>
              </View>

              <View
                style={{
                  paddingHorizontal: 6,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  maxWidth: 234,
                  // borderWidth: 1,
                  // borderColor: "red",
                }}
              >
                <View
                  style={{
                    maxWidth: "45%",
                    // borderWidth: 1,
                    // borderColor: "red",
                  }}
                >
                  <BoldText style={{ fontSize: 14 }}>
                    {item?.shop_name?.slice(0, 32)}.
                  </BoldText>
                  <RegularText style={{ fontSize: 12 }}>
                    Rider Fee: BDT10/Meal
                  </RegularText>
                </View>

                {/* <SemiBoldText style={{ fontSize: 20 }}>1.9 mi</SemiBoldText> */}

                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-end",
                    maxWidth: "55%",
                    // borderWidth: 1,
                    // borderColor: "red",
                  }}
                >
                  <RegularText style={{ fontSize: 12 }}>
                    Delivery Time
                  </RegularText>

                  <DGORegularText style={{ fontSize: 12 }}>
                    {item?.delivery?.launch}
                    {" | "}
                    {item?.delivery?.dinner}
                  </DGORegularText>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
