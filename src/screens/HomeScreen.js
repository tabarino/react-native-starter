import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

function HomeScreen(props) {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button title="Go to Components Demo" onPress={() => props.navigation.navigate('Components')} />
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={() => props.navigation.navigate('Image')}>
        <Text>Go to Image Screen</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={() => props.navigation.navigate('Counter')}>
        <Text>Go to Counter Screen</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={() => props.navigation.navigate('Color')}>
        <Text>Go to Color Screen</Text>
      </Pressable>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  pressed: {
    opacity: 0.5,
  },
  button: {
    paddingVertical: 20,
    alignSelf: 'center',
  },
});
