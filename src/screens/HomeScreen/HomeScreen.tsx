import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import GamePresentation from '../../components/GamePresentation/GamePresentation';
import styles from './HomeScreenStyle';

function HomeScreen({navigation}) {
  return (
    <View style={styles.screenContainer}>
      <ScrollView>
        <Text style={styles.textHeader}>Choose your game</Text>
        <GamePresentation
          name="Three in row"
          description="Match three in row before your oponent"
          onPress={() => navigation.navigate('ThreeInRow')}
        />
        <GamePresentation
          name="Snake game"
          description="Try to survive without eating yourself"
          onPress={() => navigation.navigate('SnakeGame')}
        />
        <GamePresentation
          name="Tap Rusher"
          description="Tap faster than your oponent"
          onPress={() => navigation.navigate('TapRusher')}
        />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
