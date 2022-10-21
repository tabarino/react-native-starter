import { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

function reducer(state, action) {
  switch (action.colorToChange) {
    case 'red': {
      if (!(state.red + action.amount > 255) && !(state.red + action.amount < 0)) {
        return { ...state, red: state.red + action.amount };
      }
      break;
    }
    case 'green': {
      if (!(state.green + action.amount > 255) && !(state.green + action.amount < 0)) {
        return { ...state, green: state.green + action.amount };
      }
      break;
    }
    case 'blue': {
      if (!(state.blue + action.amount > 255) && !(state.blue + action.amount < 0)) {
        return { ...state, blue: state.blue + action.amount };
      }
      break;
    }
    default: {
      break;
    }
  }
  return state;
}

function SquareScreen() {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
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
