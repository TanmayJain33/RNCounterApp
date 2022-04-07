import React from 'react';
import {View} from 'react-native';
import ComponentB from './ComponentB';

export default function ComponentA() {
  return (
    <View>
      <ComponentB />
    </View>
  );
}
