import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'Hi there!';
  const greeting2 = <Text>{greeting}</Text>;

  return (
    <View>
      <Text style={styles.textStyle}>This is the Components Screen</Text>
      <Text>{greeting}</Text>
      {greeting2}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
