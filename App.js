import React from 'react';
import {View} from 'react-native';
import FocusInput from './FocusInput';
import Timer from './Timer';

export default function App() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FocusInput />
      <Timer />
    </View>
  );
}
