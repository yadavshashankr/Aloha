

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomeFull from "./screens/Home";
import Surfing from "./screens/Surfing";
import { View, Text, Pressable, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamsList } from "./routes/HomeStack";


const Stack = createNativeStackNavigator<RootStackParamsList>()
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <View>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
        />
      </View>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeFull}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Surfing"
              component={Surfing}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
