import { StyleSheet, Text, View } from 'react-native';

function BoxScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Box Screen</Text>
    </View>
  );
}

export default BoxScreen;

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: 'black',
  },
  text: {
    borderWidth: 3,
    borderColor: 'red',
    margin: 20,
    padding: 20,
  },
});
