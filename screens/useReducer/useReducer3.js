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

export default function UseReducer3() {
  const [counter, dispatch] = useReducer(reducerFunction, initialState);
  const [counterTwo, dispatchTwo] = useReducer(reducerFunction, initialState);

  return (
    <>
      <Text
        style={{
          fontSize: 24.1,
          fontWeight: '500',
          color: '#000',
          textAlign: 'center',
        }}>
        Counter using multiple useReducer()
      </Text>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 30, color: '#000'}}>
          Counter 1 - {counter}
        </Text>
        <Button
          title="Increment"
          onPress={() => {
            dispatch('increment');
          }}
        />
        <View style={{margin: 10}} />
        <Button
          title="Decrement"
          onPress={() => {
            dispatch('decrement');
          }}
        />
        <View style={{margin: 10}} />
        <Button
          title="Reset"
          onPress={() => {
            dispatch('reset');
          }}
        />
        <View style={{margin: 10}} />
        <Text style={{textAlign: 'center', fontSize: 30, color: '#000'}}>
          Counter 2 - {counterTwo}
        </Text>
        <Button
          title="Increment"
          onPress={() => {
            dispatchTwo('increment');
          }}
        />
        <View style={{margin: 10}} />
        <Button
          title="Decrement"
          onPress={() => {
            dispatchTwo('decrement');
          }}
        />
        <View style={{margin: 10}} />
        <Button
          title="Reset"
          onPress={() => {
            dispatchTwo('reset');
          }}
        />
      </View>
    </>
  );
}
