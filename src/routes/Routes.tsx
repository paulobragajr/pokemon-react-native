import 'react-native-gesture-handler';
import * as React from 'react';
import {useRef, useState} from 'react';
import analytics from '@react-native-firebase/analytics';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PokemonDetailScreen, PokemonListScreen} from './InjectionPage';

const Stack = createStackNavigator();

const Routes = () => {
  const [routeName, setRouteName] = useState<string | undefined>('');
  const navigationRef = useRef<NavigationContainerRef>(null);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        setRouteName(navigationRef.current?.getCurrentRoute()?.name)
      }
      onStateChange={() => {
        const previousRouteName = routeName;
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

        if (previousRouteName !== currentRouteName) {
          analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }

        setRouteName(currentRouteName);
      }}>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="PokemonListScreen"
          component={PokemonListScreen}
        />

        <Stack.Screen
          name="PokemonDetailScreen"
          component={PokemonDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
