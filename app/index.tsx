import { Redirect } from "expo-router";
import { View, StyleSheet } from "react-native";
import { Slot } from "expo-router";

export default function Page() {
  return <Redirect href="/auth/welcome" />;
}
