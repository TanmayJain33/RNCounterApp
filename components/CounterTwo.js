import React from 'react';
import {View, Text, Button} from 'react-native';
import useCounter from '../screens/customHooks/useCounter';

export default function CounterTwo() {
  const {counter, increment, decrement, reset} = useCounter(5, 5);

  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 50, color: '#000'}}>
          {counter}
        </Text>
        <Button title="Increment" onPress={increment} />
        <View style={{margin: 10}} />
        <Button title="Decrement" onPress={decrement} />
        <View style={{margin: 10}} />
        <Button title="Reset" onPress={reset} />
      </View>
    </>
  );
}
