import React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button title="Go to Components Demo" onPress={() => props.navigation.navigate('Components')} />
      <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default HomeScreen;
