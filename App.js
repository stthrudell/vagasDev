
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Text, View, Button } from 'react-native'

import Splash from './src/Views/Splash';
import Home from './src/Views/Home';
import Repositories from './src/Views/Repositories';
import Vacancies from './src/Views/Vacancies';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Repositories"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Repositories" component={Repositories} />
        <Stack.Screen name="Vacancies" component={Vacancies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
