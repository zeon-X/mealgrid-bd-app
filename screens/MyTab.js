import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "./Home";
import { CustomDrawer } from "../components/shared/CustomDrawer";

/**
 * @author
 * @function MyTab
 **/
const Drawer = createDrawerNavigator();
export const MyTab = (props) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#aa18ea",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: "Roboto-Medium",
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};
