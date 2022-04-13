import React from 'react';
import {View} from 'react-native';
import Counter from './Counter';

export default function App() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Counter />
    </View>
  );
}
