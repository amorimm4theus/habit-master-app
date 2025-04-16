import { Slot } from "expo-router";
import { View, StyleSheet, ImageBackground, useWindowDimensions } from "react-native";

export default function Layout() {
    /* return (
      <ImageBackground 
        style={[
          styles.container,
          {
            height: useWindowDimensions().height,
            width: useWindowDimensions().width + 20
          }
        ]} 
        source={require('./../assets/images/bg.png')}
        resizeMode="contain"
        >
        <Slot />
      </ImageBackground>
    ); */
    return (
      <View 
        style={
          styles.container}
        >
        <Slot />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f6',
    },
  });