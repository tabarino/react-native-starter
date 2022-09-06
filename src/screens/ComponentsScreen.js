import React from 'react';
import { StyleSheet, Text } from 'react-native';

const ComponentsScreen = () => {
  return (
    <Text style={styles.textStyle}>
      This is the Components Screen
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ComponentsScreen;
