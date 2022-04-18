import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';

export default function UseState2() {
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
        Counter using useState() and previous state
      </Text>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 50, color: '#000'}}>
          {counter}
        </Text>
        <Button
          title="Increment By 1"
          onPress={() => {
            setCounter(prevCounter => prevCounter + 1);
          }}
        />
        <View style={{margin: 10}} />
        <Button
          title="Decrement By 1"
          onPress={() => {
            setCounter(prevCounter => prevCounter - 1);
          }}
        />
        <View style={{margin: 10}} />
        <Button
          title="Increment By 5"
          onPress={() => {
            setCounter(prevCounter => prevCounter + 5);
          }}
        />
        <View style={{margin: 10}} />
        <Button
          title="Decrement By 5"
          onPress={() => {
            setCounter(prevCounter => prevCounter - 5);
          }}
        />
        <TouchableOpacity
          style={{marginTop: 20, padding: 10, backgroundColor: buttonColor}}
          onPress={() => {
            setCounter(prevCounter => prevCounter - prevCounter);
            setButtonEnabled(!buttonEnabled);
          }}>
          <Text style={{color: 'white', fontWeight: '700'}}>RESET</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
