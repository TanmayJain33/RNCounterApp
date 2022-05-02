import React from 'react';
import {View} from 'react-native';
import CounterOne from '../../components/CounterOne';
import CounterTwo from '../../components/CounterTwo';

export default function UseCounterHook() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <CounterOne />
      <CounterTwo />
    </View>
  );
}
