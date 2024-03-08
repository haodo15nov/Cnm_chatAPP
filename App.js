import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import a_login from "./Screens/a_login"
import a_register from "./Screens/a_register"
import a_forgot from "./Screens/a_login"
import b_chat from "./Screens/b_chat"
import b_contact from "./Screens/b_contact"
import b_profile from "./Screens/b_profile"


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
        <Stack.Screen component={a_login} name="login" />
        <Stack.Screen component={a_register} name="register" />
        <Stack.Screen component={b_chat} name="chat" />
        <Stack.Screen component={b_contact} name="contact" />
        <Stack.Screen component={b_profile} name="profile" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

