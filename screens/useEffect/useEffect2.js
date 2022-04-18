import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Button, TextInput} from 'react-native';

export default function UseEffect2() {
  const [counter, setCounter] = useState(0);
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const buttonColor = buttonEnabled ? 'orange' : 'green';
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('Updating user name');
    console.log(`Counter value is: ${counter}.`);
  }, [counter]);

  return (
    <>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '500',
          color: '#000',
          textAlign: 'center',
        }}>
        Simple Counter using useEffect()
      </Text>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
          style={{
            height: 40,
            width: 200,
            margin: 12,
            borderWidth: 1,
            padding: 10,
          }}
          value={name}
          placeholder="Enter your name"
          onChangeText={text => setName(text)}
        />
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
