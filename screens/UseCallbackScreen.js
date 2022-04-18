import React from 'react';
import {View} from 'react-native';
import ParentComponent from '../components/ParentComponent';

export default function UseCallbackScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ParentComponent />
    </View>
  );
}
