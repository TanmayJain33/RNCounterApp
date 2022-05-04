import React from 'react';
import {View} from 'react-native';
import UserForm from '../../components/UserForm';

export default function UseInputHook() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <UserForm />
    </View>
  );
}
