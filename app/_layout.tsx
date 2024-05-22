import { useEffect } from 'react';
import {
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
      SplashScreen.hideAsync();
  }, []);

  return (
    <ThemeProvider value={DefaultTheme}>
      <SafeAreaView style={{flex: 1}}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
      </SafeAreaView>
    </ThemeProvider>
  );
}

