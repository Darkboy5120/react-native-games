import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ThreeInRowScreen from '../screens/ThreeInRowScreen/ThreeInRowScreen';
import SnakeGameScreen from '../screens/SnakeGameScreen';
import globalStyles from '../theme/globalStyles';

type RootStackParamList = {
  Home: undefined;
  ThreeInRow: undefined;
  SnakeGame: undefined;
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

const RootStack = createNativeStackNavigator<RootStackParamList>();

function InitialStack() {
  const { genericScreen } = getScreenSettings();
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerTintColor: 'red'}}>
        <RootStack.Screen {...genericScreen("Home", "Home")} component={HomeScreen} />
        <RootStack.Screen {...genericScreen("ThreeInRow", "Three in row")} component={ThreeInRowScreen} />
        <RootStack.Screen {...genericScreen("SnakeGame", "Snake game")} component={SnakeGameScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default InitialStack;