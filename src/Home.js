import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import colors from './colors';
import Accounts from './Screens/Accounts';
import Cash from './Screens/Cash';
const Stack = createStackNavigator();

function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Accounts"
          component={Accounts}
          options={{
            headerStyle: {
              backgroundColor: colors.primaryBackgroundColor,
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTintColor: colors.primaryTintColor,
          }}
        />
        <Stack.Screen
          name="Cash"
          component={Cash}
          options={{
            headerStyle: {
              backgroundColor: colors.secondaryBackgroundColor,
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTintColor: colors.primaryTintColor,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Home;
