import { StyleSheet, View } from 'react-native';

function BoxExerciseScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.viewOne} />
      <View style={styles.viewTwo} />
      <View style={styles.viewThree} />
    </View>
  );
}

export default BoxExerciseScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 3,
    borderColor: 'black',
    height: 100,
  },
  viewOne: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  viewTwo: {
    alignSelf: 'flex-end',
    height: 50,
    width: 50,
    backgroundColor: 'green',
  },
  viewThree: {
    height: 50,
    width: 50,
    backgroundColor: 'purple',
  },
});
