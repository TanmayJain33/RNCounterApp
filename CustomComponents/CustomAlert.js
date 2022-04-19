import React, {useState} from 'react';
import {Button, Alert, View} from 'react-native';

export default function CustomAlert({title, noOfButtons}) {
  const openAlert = () => {
    alert('Alert with one button');
  };

  const openTwoButtonAlert = () => {
    Alert.alert(
      'Hey There!',
      'Two button alert dialog',
      [
        {text: 'Yes', onPress: () => console.log('Yes button clicked')},
        {
          text: 'No',
          onPress: () => console.log('No button clicked'),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const openThreeButtonAlert = () => {
    Alert.alert(
      'Hey There!',
      'Three button alert dialog',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('later button clicked'),
        },
        {text: 'Yes', onPress: () => console.log('Yes button clicked')},
        {
          text: 'OK',
          onPress: () => console.log('OK button clicked'),
        },
      ],
      {
        cancelable: false,
      },
    );
  };

  function openAlerts() {
    if (noOfButtons == 1) {
      openAlert();
    } else if (noOfButtons == 2) {
      openTwoButtonAlert();
    } else if (noOfButtons == 3) {
      openThreeButtonAlert();
    }
  }

  return (
    <View style={{margin: 10}}>
      <Button title={title} onPress={openAlerts} />
    </View>
  );
}
