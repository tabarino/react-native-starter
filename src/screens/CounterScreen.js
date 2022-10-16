import { useState } from 'react';
import { Button, Text, View } from 'react-native';

function CounterScreen() {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button title="Increase" onPress={() => setCounter((prevState) => prevState + 1)} />
      <Button title="Decrease" onPress={() => setCounter((prevState) => prevState - 1)} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
}

export default CounterScreen;
