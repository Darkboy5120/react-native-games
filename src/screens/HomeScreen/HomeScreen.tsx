import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import GamePresentation from '../../components/GamePresentation/GamePresentation';
import styles from './HomeScreenStyle';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Choose your game</Text>
        <GamePresentation
          name="Three in a row"
          description="Match three in a row your oponent"
          onPress={() => {}}
        />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
