import React from 'react';
import {View, Text, Button} from 'react-native';
import useArray from '../customHooks/useArray';

export default function UseArrayHook() {
  const {array, set, push, remove, filter, update, clear} = useArray([
    1, 2, 3, 4, 5, 6,
  ]);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 28, color: '#000', fontWeight: 'bold'}}>
          {array.join(', ')}
        </Text>
      </View>
      <Button title="Add 7" onPress={() => push(7)} />
      <Button title="Change Second Element to 9" onPress={() => update(1, 9)} />
      <Button title="Remove Second Element" onPress={() => remove(1)} />
      <Button
        title="Keep numbers less than 4"
        onPress={() => filter(n => n < 4)}
      />
      <Button title="Set to 1,2" onPress={() => set([1, 2])} />
      <Button title="Clear" onPress={clear} />
    </View>
  );
}
