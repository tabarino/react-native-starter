import { StyleSheet, Text, View } from 'react-native';

function BoxScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textOne}>Text1</Text>
      <Text style={styles.textTwo}>Text2</Text>
      <Text style={styles.textThree}>Text3</Text>
    </View>
  );
}

export default BoxScreen;

// Note: alignSelf on child overrides alignItems on parent

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
  },
  textOne: {
    flex: 4,
    alignSelf: 'flex-start',
    borderWidth: 3,
    borderColor: 'red',
  },
  textTwo: {
    flex: 4,
    alignSelf: 'flex-end',
    borderWidth: 3,
    borderColor: 'red',
  },
  textThree: {
    flex: 2,
    alignSelf: 'stretch',
    borderWidth: 3,
    borderColor: 'red',
  },
});
