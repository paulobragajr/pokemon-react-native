import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PokemonListScreen from '../page/pokemonlist/PokemonListScreen';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="PokemonListScreen"
          component={PokemonListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
