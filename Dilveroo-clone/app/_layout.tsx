import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Restaurant from '../app/Restaurant';
import Home from './home';
import { store } from './store';
import { Provider } from 'react-redux';
import Basket from './Basket';
import { Pressable } from 'react-native';
import PreparingOrder from './PreparingOrder';


export type RootStackParamList = {
  Home: undefined;
  Restaurant: { id: string };
  Basket: undefined;
  PreparingOrder: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout: React.FC = () => {
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
    // <NavigationContainer>
        <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Restaurant' component={Restaurant} />
        <Stack.Screen name='Basket' component={Basket} options={{presentation:'modal', headerShown:false}}/>
        <Stack.Screen name='PreparingOrder'component={PreparingOrder} options={{presentation:'fullScreenModal',headerShown:false}}/>
      </Stack.Navigator>
    </Provider>
    // </NavigationContainer>
    

  );
}

export default RootLayout

