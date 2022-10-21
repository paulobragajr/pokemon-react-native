import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MakePokemonListScreen} from './Pages';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="PokemonListScreen"
          component={MakePokemonListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
