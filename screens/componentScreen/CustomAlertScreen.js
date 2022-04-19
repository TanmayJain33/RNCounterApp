import React from 'react';
import {View} from 'react-native';
import CustomAlert from '../../CustomComponents/CustomAlert';

export default function CustomAlertScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <CustomAlert noOfButtons={1} title="Open single button alert" />
      <CustomAlert noOfButtons={2} title="Open two button alert" />
      <CustomAlert noOfButtons={3} title="Open three button alert" />
    </View>
  );
}
