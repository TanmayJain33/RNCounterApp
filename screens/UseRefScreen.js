import React from 'react';
import {View} from 'react-native';
import FocusInput from '../components/FocusInput';
import Timer from '../components/Timer';

export default function UseRefScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FocusInput />
      <Timer />
    </View>
  );
}
