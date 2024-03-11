import React from "react";
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
import { MealGridColors } from "../assets/Values/Colors";
import { intersectRating } from "../assets/index.icon";
import { DGORegularText } from "../components/text/DelaGothicOne";

/**
 * @author
 * @function Home
 **/

const vendorDataNearby = [
  {
    shop_name: "Banaliana",
    rating: 3.2,
    location: {
      longitude: null,
      latitude: null,
    },
    cover_img:
      "https://images.unsplash.com/photo-1625772415023-66f9b62a12b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: {
      name: "New",
      bulb_color: "#32CD32",
    },
  },
  {
    shop_name: "Vorta Vat",
    rating: 4.2,
    location: {
      longitude: null,
      latitude: null,
    },
    cover_img:
      "https://images.unsplash.com/photo-1652954008429-ce394eacbd7f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: {
      name: "Closed",
      bulb_color: "red",
    },
  },
  {
    shop_name: "Niribili",
    rating: 2.4,
    location: {
      longitude: null,
      latitude: null,
    },
    cover_img:
      "https://images.unsplash.com/photo-1582576163090-09d3b6f8a969?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: {
      name: "Active",
      bulb_color: "#32CD32",
    },
  },
  {
    shop_name: "Kasem Food Corner",
    rating: 3.9,
    location: {
      longitude: null,
      latitude: null,
    },
    cover_img:
      "https://images.unsplash.com/photo-1598514982901-ae62764ae75e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: {
      name: "Active",
      bulb_color: "#32CD32",
    },
  },
  {
    shop_name: "Otithi Hotel",
    rating: 4.8,
    location: {
      longitude: null,
      latitude: null,
    },
    cover_img:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: {
      name: "Active",
      bulb_color: "#32CD32",
    },
  },
];
const vendorDataInTown = [
  {
    shop_name: "Beltola Tong",
    rating: 3.2,
    location: {
      longitude: null,
      latitude: null,
    },
    cover_img:
      "https://images.unsplash.com/photo-1579619002916-88cd4c81a70c?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: {
      name: "Active",
      bulb_color: "#32CD32",
    },
  },
  {
    shop_name: "Vojonbari",
    rating: 3.2,
    location: {
      longitude: null,
      latitude: null,
    },
    cover_img:
      "https://images.unsplash.com/photo-1616645258469-ec681c17f3ee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: null,
  },
  {
    shop_name: "Banaliana",
    rating: 3.2,
    location: {
      longitude: null,
      latitude: null,
    },
    cover_img:
      "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: {
      name: "Active",
      bulb_color: "#32CD32",
    },
  },
  {
    shop_name: "Vorta Vat",
    rating: 4.2,
    location: {
      longitude: null,
      latitude: null,
    },
    cover_img:
      "https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: {
      name: "Active",
      bulb_color: "#32CD32",
    },
  },
  {
    shop_name: "Niribili",
    rating: 2.4,
    location: {
      longitude: null,
      latitude: null,
    },
    cover_img:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: {
      name: "Active",
      bulb_color: "#32CD32",
    },
  },
  {
    shop_name: "Kasem Food Corner",
    rating: 3.9,
    location: {
      longitude: null,
      latitude: null,
    },
    cover_img:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: {
      name: "Active",
      bulb_color: "#32CD32",
    },
  },
  {
    shop_name: "Otithi Hotel",
    rating: 4.8,
    location: {
      longitude: null,
      latitude: null,
    },
    cover_img:
      "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: {
      name: "Active",
      bulb_color: "#32CD32",
    },
  },
];
const storyData = [
  {
    title: "Easy Manage",
    img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nav_link: null,
  },
  {
    title: "Healthy",
    img: "https://images.unsplash.com/photo-1528712306091-ed0763094c98?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nav_link: null,
  },

  {
    title: "Fast Delievery",
    img: "https://images.unsplash.com/photo-1615719413546-198b25453f85?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8MXwwfHx8MA%3D%3D",
    nav_link: null,
  },
  {
    title: "Convinient",
    img: "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nav_link: null,
  },
  {
    title: "Healthy",
    img: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nav_link: null,
  },
  {
    title: "Easy Manage",
    img: "https://images.unsplash.com/photo-1507638940746-7b17d6b55b8f?q=80&w=1432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nav_link: null,
  },
];

export const Home = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  return (
    <ScrollView
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
          marginBottom: 20,
          width: width,
          paddingHorizontal: 24,
          marginTop: 24,
        }}
      />
      <SearchBar
        width={width}
        style={{ marginBottom: 20, paddingHorizontal: 20 }}
      />

      <StoryBar
        width={width}
        style={{ marginBottom: 40 }}
        storyData={storyData}
      />

      <LoadVendor
        width={width}
        style={{ marginBottom: 32 }}
        caption={"Nearby meal provider"}
        vendorData={vendorDataNearby}
      />

      <LoadVendor
        width={width}
        style={{ marginBottom: 16 }}
        caption={"Best meal provider in town"}
        vendorData={vendorDataInTown}
      />
    </ScrollView>
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
        style={{ borderWidth: 1, borderColor: "red", height: 32, width: 32 }}
        onPress={() => navigation.openDrawer()}
      >
        <Image
          source={null}
          style={{
            height: 32,
            width: 32,
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
        <SemiBoldText style={{ fontSize: 18 }}>Deliver to</SemiBoldText>
        <RegularText style={{ fontSize: 14 }}>
          Bholahut palace, Baliapukur choto bot-tola..
        </RegularText>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 32,
          width: 32,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "red",
        }}
      >
        <View style={{ height: 32, width: 32 }}>
          <Image
            source={null}
            style={{
              height: 32,
              width: 32,
              borderWidth: 1,
              borderColor: "green",
            }}
          />

          <View
            style={{
              height: 8,
              width: 8,
              backgroundColor: "red",
              borderRadius: 100,
              marginTop: -28,
              marginLeft: 18,
            }}
          />
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
          source={null}
          style={{
            height: 26,
            width: 26,
            borderWidth: 1,
            borderColor: "red",
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

                  borderWidth: 2,
                  borderColor: "#fff",
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

const LoadVendor = ({ width, style, caption, vendorData }) => {
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
            >
              <View>
                <ImageBackground
                  source={{ uri: item?.cover_img }}
                  style={[
                    {
                      height: 158,
                      width: 234,

                      marginBottom: 6,
                    },
                  ]}
                  imageStyle={{
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: "#fff",
                  }}
                >
                  {item?.status && (
                    <View
                      style={[
                        {
                          height: 22,
                          width: 50,
                          backgroundColor: "#fff",
                          margin: 4,
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
                          height: 8,
                          width: 8,
                          backgroundColor: item?.status?.bulb_color || "red",
                          borderRadius: 100,
                        }}
                      />
                      <SemiBoldText style={{ fontSize: 12 }}>
                        {item?.status?.name}
                      </SemiBoldText>
                    </View>
                  )}
                  {/* <View style={{ marginTop: 94, marginLeft: 170 }}>
                    <ImageBackground
                      source={intersectRating}
                      style={{
                        height: 60,
                        width: 60,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        padding: 6,
                      }}
                    >
                      <DGORegularText style={{ color: "#fff", fontSize: 11 }}>
                        1:00pm
                      </DGORegularText>
                      <DGORegularText style={{ color: "#fff", fontSize: 11 }}>
                        8:00pm
                      </DGORegularText>
                    </ImageBackground>
                  </View> */}
                </ImageBackground>
              </View>

              <View
                style={{
                  paddingHorizontal: 6,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <SemiBoldText style={{ fontSize: 14 }}>
                    {item?.shop_name}
                  </SemiBoldText>
                  <RegularText style={{ fontSize: 12 }}>
                    Delievery Fee: BDT10/Meal
                  </RegularText>
                </View>

                {/* <SemiBoldText style={{ fontSize: 20 }}>1.9 mi</SemiBoldText> */}

                <View
                  style={{ flexDirection: "column", alignItems: "flex-end" }}
                >
                  <RegularText style={{ fontSize: 12 }}>Rating</RegularText>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <DGORegularText style={{ fontSize: 12 }}>
                      {item?.rating}
                    </DGORegularText>
                    <RegularText style={{ fontSize: 12, marginTop: 2 }}>
                      {" "}
                      (121)
                    </RegularText>
                  </View>
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
