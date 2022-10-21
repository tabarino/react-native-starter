import { FlatList, Text, StyleSheet } from 'react-native';

function ListScreen() {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 21 },
    { name: 'Friend #3', age: 22 },
    { name: 'Friend #4', age: 23 },
    { name: 'Friend #5', age: 24 },
    { name: 'Friend #6', age: 25 },
    { name: 'Friend #7', age: 26 },
  ];

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => <Text style={styles.text}>{`${item.name} - Age: ${item.age}`}</Text>}
      // showsVerticalScrollIndicator={false}
    />
  );
}

export default ListScreen;

const styles = StyleSheet.create({
  text: {
    marginVertical: 50,
    marginHorizontal: 10,
  },
});
