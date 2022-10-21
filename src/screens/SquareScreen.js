import { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_RED': {
      if (!(state.red + action.payload > 255) && !(state.red + action.payload < 0)) {
        return { ...state, red: state.red + action.payload };
      }
      break;
    }
    case 'CHANGE_GREEN': {
      if (!(state.green + action.payload > 255) && !(state.green + action.payload < 0)) {
        return { ...state, green: state.green + action.payload };
      }
      break;
    }
    case 'CHANGE_BLUE': {
      if (!(state.blue + action.payload > 255) && !(state.blue + action.payload < 0)) {
        return { ...state, blue: state.blue + action.payload };
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
        onIncrease={() => dispatch({ type: 'CHANGE_RED', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'CHANGE_RED', payload: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ type: 'CHANGE_GREEN', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'CHANGE_GREEN', payload: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ type: 'CHANGE_BLUE', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'CHANGE_BLUE', payload: -1 * COLOR_INCREMENT })}
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
