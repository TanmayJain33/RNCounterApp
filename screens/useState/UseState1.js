import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';

export default function UseState1() {
  const [counter, setCounter] = useState(0);
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const buttonColor = buttonEnabled ? 'orange' : 'green';

  return (
    <>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '500',
          color: '#000',
          textAlign: 'center',
        }}>
        Simple Counter using useState()
      </Text>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 50, color: '#000'}}>
          {counter}
        </Text>
        <Button
          title="Increment"
          onPress={() => {
            setCounter(counter + 1);
          }}
        />
        <View style={{margin: 10}} />
        <Button
          title="Decrement"
          onPress={() => {
            setCounter(counter - 1);
          }}
        />
        <TouchableOpacity
          style={{marginTop: 20, padding: 10, backgroundColor: buttonColor}}
          onPress={() => {
            setCounter(0);
            setButtonEnabled(!buttonEnabled);
          }}>
          <Text style={{color: 'white', fontWeight: '700'}}>RESET</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
