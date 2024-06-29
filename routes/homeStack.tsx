const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Surfing from "../screens/Surfing";
import Home from "../screens/HomeFull";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const screens = {
  Home: {
    screen: Home,
  },
  Surfing: {
    screen: Surfing,
  },
};

// home stack navigator screens
const HomeStack = createNativeStackNavigator.apply(screens);

export default HomeStack;


