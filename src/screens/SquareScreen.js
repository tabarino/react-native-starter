import { StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';
import { useState } from 'react';

const COLOR_INCREMENT = 15;

function SquareScreen() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  function setColor(color, change) {
    switch (color) {
      case 'red': {
        if (!(red + change > 255) && !(red + change < 0)) {
          setRed((prevState) => prevState + change);
        }
        break;
      }
      case 'green': {
        if (!(green + change > 255) && !(green + change < 0)) {
          setGreen((prevState) => prevState + change);
        }
        break;
      }
      case 'blue': {
        if (!(blue + change > 255) && !(blue + change < 0)) {
          setBlue((prevState) => prevState + change);
        }
        break;
      }
      default: {
        break;
      }
    }
  }

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
      />
      <View style={[styles.color, { backgroundColor: `rgb(${red}, ${green}, ${blue})` }]} />
    </View>
  );
}

export default SquareScreen;

const styles = StyleSheet.create({
  color: {
    height: 150,
    width: 150,
  },
});
