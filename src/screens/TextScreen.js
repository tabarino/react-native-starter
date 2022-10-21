import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

function TextScreen() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Text>Enter Name:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          autoCorrect={false}
          value={name}
          onChangeText={(value) => setName(value)}
        />
        <Text>My name is {name}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text>Enter Password:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          autoCorrect={false}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        {password.length < 5 && <Text>Password must be 5 characters</Text>}
      </View>
    </View>
  );
}

export default TextScreen;

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  fieldContainer: {
    marginBottom: 30,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
  },
});
