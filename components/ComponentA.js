import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {CounterContext} from '../App';

export default function ComponentA() {
  const counterContext = useContext(CounterContext);

  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
      }}>
      <Text>ComponentA - {counterContext.counterState}</Text>
      <Button
        title="Increment"
        onPress={() => counterContext.counterDispatch('increment')}
      />
      <Button
        title="Decrement"
        onPress={() => counterContext.counterDispatch('decrement')}
      />
      <Button
        title="Reset"
        onPress={() => counterContext.counterDispatch('reset')}
      />
    </View>
  );
}
