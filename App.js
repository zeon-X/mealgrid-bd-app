import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView, View, StatusBar } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import * as Font from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Registration } from "./screens/Registration";
import { Login } from "./screens/Login";
import { OnBoardingScreen } from "./screens/OnBoardingScreen";
import { Profile } from "./screens/Profile";
import { MyTab } from "./screens/MyTab";
import { useState } from "react";

const Stack = createNativeStackNavigator();

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[{}, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

export default function App({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [isFirstLaunch, setFirstLaunch] = useState(null);
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <MyStatusBar backgroundColor="#535353" barStyle="light-content" />

        <NavigationContainer>
          <Stack.Navigator>
            {/* {authState?.authenticate && authState?.verified ? ( */}
            {1 ? (
              <>
                <Stack.Screen
                  name="MyTab"
                  component={MyTab}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Profile"
                  component={Profile}
                  options={{
                    headerShown: false,
                  }}
                />
              </>
            ) : (
              <>
                {/* {isFirstLaunch === true && ( */}
                {0 && (
                  <>
                    <Stack.Screen
                      name="OnboardingScreen"
                      component={OnBoardingScreen}
                      options={{
                        headerShown: false,
                      }}
                    />
                  </>
                )}
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{
                    headerShown: false,
                  }}
                />

                <Stack.Screen
                  name="Registration"
                  component={Registration}
                  options={{
                    headerShown: false,
                  }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>

        {/* <Toast config={toastConfig} /> */}
      </GestureHandlerRootView>
    </Provider>
  );
}
