import { Slot } from "expo-router";
import { View, StyleSheet, ImageBackground, useWindowDimensions } from "react-native";
import {WaterProvider} from "../context/WaterContext";

export default function RootLayout() {
  return (
    <WaterProvider>
      <Slot />
    </WaterProvider>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f6',
    },
  });