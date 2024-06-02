import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './Home';
import Restaurant from '../app/Restaurant';



export type RootStackParamList = {
  Home: undefined;
  Restaurant: { id: string }; // Add more screens and their params here
};


const Stack = createNativeStackNavigator<RootStackParamList>();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout :React.FC=()=> {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    
    <Stack.Navigator>
      <Stack.Screen name='Home' component={home} />
      <Stack.Screen name='Restaurant' component={Restaurant} />
    </Stack.Navigator>
  );
}

export default RootLayout

