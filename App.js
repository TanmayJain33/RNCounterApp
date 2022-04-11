import React, {useReducer} from 'react';
import {View, Text, Button} from 'react-native';

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducerFunction = (currentState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.value,
      };
    case 'decrement':
      return {
        ...currentState,
        firstCounter: currentState.firstCounter - action.value,
      };
    case 'increment2':
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value,
      };
    case 'decrement2':
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.value,
      };
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
      <Text style={{textAlign: 'center', fontSize: 40}}>
        Counter 1 - {counter.firstCounter}
      </Text>
      <Text style={{textAlign: 'center', fontSize: 40}}>
        Counter 2 - {counter.secondCounter}
      </Text>
      <View style={{margin: 10}} />
      <Button
        title="Increment Counter 1"
        onPress={() => dispatch({type: 'increment', value: 1})}
      />
      <View style={{margin: 10}} />
      <Button
        title="Decrement Counter 1"
        onPress={() => dispatch({type: 'decrement', value: 1})}
      />
      <View style={{margin: 10}} />
      <Button
        title="Increment 5"
        onPress={() => dispatch({type: 'increment', value: 5})}
      />
      <View style={{margin: 10}} />
      <Button
        title="Decrement 5"
        onPress={() => dispatch({type: 'decrement', value: 5})}
      />
      <View style={{flexDirection: 'row', margin: 20}}>
        <Button
          title="Increment Counter 2"
          onPress={() => dispatch({type: 'increment2', value: 1})}
        />
        <View style={{margin: 10}} />
        <Button
          title="Decrement Counter 2"
          onPress={() => dispatch({type: 'decrement2', value: 1})}
        />
      </View>
      <Button title="Reset" onPress={() => dispatch({type: 'reset'})} />
    </View>
  );
}
