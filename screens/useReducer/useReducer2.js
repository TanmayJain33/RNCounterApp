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

export default function UseReducer2() {
  const [counter, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '500',
          color: '#000',
          textAlign: 'center',
        }}>
        Counter using useReducer() with state and action objects
      </Text>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 30, color: '#000'}}>
          Counter 1 - {counter.firstCounter}
        </Text>
        <Text style={{textAlign: 'center', fontSize: 30, color: '#000'}}>
          Counter 2 - {counter.secondCounter}
        </Text>
        <Button
          title="Increment Counter 1"
          onPress={() => {
            dispatch({type: 'increment', value: 1});
          }}
        />
        <View style={{margin: 10}} />
        <Button
          title="Decrement Counter 1"
          onPress={() => {
            dispatch({type: 'decrement', value: 1});
          }}
        />
        <View style={{margin: 10}} />
        <Button
          title="Increment Counter 2"
          onPress={() => {
            dispatch({type: 'increment2', value: 1});
          }}
        />
        <View style={{margin: 10}} />
        <Button
          title="Decrement Counter 2"
          onPress={() => {
            dispatch({type: 'decrement2', value: 1});
          }}
        />
        <View style={{margin: 10}} />
        <Button
          title="Reset"
          onPress={() => {
            dispatch({type: 'reset'});
          }}
        />
      </View>
    </>
  );
}
