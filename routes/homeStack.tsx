import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Surfing from "../screens/Surfing";
import Home from "../screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export type RootStackParamsList = {
  Home: undefined,
  Surfing: {
    description: string
  }
};

const screens = {
  Home: {
    screen: Home,
  },
  Surfing: {
    screen: Surfing,
  },
};

// home stack navigator screens
const HomeStack = createNativeStackNavigator<RootStackParamsList>;

export default HomeStack;


