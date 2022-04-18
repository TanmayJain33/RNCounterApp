import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {CounterContext} from '../screens/useReducer/useReducer4';

export default function ComponentC() {
  const counterContext = useContext(CounterContext);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
      }}>
      <Text style={{fontSize: 20, color: '#000'}}>
        Component C - {counterContext.counterState}
      </Text>
      <View style={{margin: 10}} />
      <Button
        title="Increment"
        onPress={() => counterContext.counterDispatch('increment')}
      />
      <View style={{margin: 10}} />
      <Button
        title="Decrement"
        onPress={() => counterContext.counterDispatch('decrement')}
      />
      <View style={{margin: 10}} />
      <Button
        title="Reset"
        onPress={() => counterContext.counterDispatch('reset')}
      />
    </View>
  );
}
