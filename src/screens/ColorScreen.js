import { Button, FlatList, StyleSheet, View } from 'react-native';
import { useState } from 'react';

function randomRgb() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

function ColorScreen() {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button title="Add a Color" onPress={() => setColors([...colors, randomRgb()])} />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => <View style={[styles.color, { backgroundColor: item }]} />}
      />
    </View>
  );
}

export default ColorScreen;

const styles = StyleSheet.create({
  color: {
    height: 100,
    width: 100,
  },
});
