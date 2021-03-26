
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './src/Views/Splash';
import Home from './src/Views/Home';
import Repositories from './src/Views/Repositories';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Repositories" component={Repositories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const App = CreateStackNavigatior(
//   {
//     Splash: {screen:Splash},
//     Home: {screen: Home}
//   },
//   {
//     headerMode: 'none',
//     navigationOptions: {
//       headerVisible: false,
//     }
//   }
// );

export default App
