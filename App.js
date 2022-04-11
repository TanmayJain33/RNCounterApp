import React, {useReducer} from 'react';
import {View, Text, Button} from 'react-native';

const initialState = 0;

const reducerFunction = (currentState, action) => {
  switch (action) {
    case 'increment':
      return currentState + 1;
    case 'decrement':
      return currentState - 1;
    case 'reset':
      return initialState;
    default:
      return currentState;
  }
};

export default function App() {
  const [counter, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 50}}>{counter}</Text>
      <Button title="Increment" onPress={() => dispatch('increment')} />
      <View style={{margin: 10}} />
      <Button title="Decrement" onPress={() => dispatch('decrement')} />
      <View style={{margin: 10}} />
      <Button title="Reset" onPress={() => dispatch('reset')} />
    </View>
  );
}
