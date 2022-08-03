import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ThreeInRowScreen from '../screens/ThreeInRowScreen/ThreeInRowScreen';
import globalStyles from '../theme/globalStyles';

type RootStackParamList = {
  Home: undefined;
  ThreeInRow: undefined;
};

function getScreenSettings() {
  return {
    genericScreen: (name: keyof RootStackParamList, title: string) => {
      return {
        name,
        options: {
          title,
          headerStyle: globalStyles.navigationHeader,
          headerTitleStyle: globalStyles.navigationTitle,
          headerTintColor: globalStyles.headerTintColor.color,
        },
      };
    },
  };
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function InitialStack() {
  const { genericScreen } = getScreenSettings();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTintColor: 'red'}}>
        <Stack.Screen {...genericScreen("Home", "Home")} component={HomeScreen} />
        <Stack.Screen {...genericScreen("ThreeInRow", "Three in row")} component={ThreeInRowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default InitialStack;