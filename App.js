import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const buttonColor = buttonEnabled ? 'red' : 'blue';

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{textAlign: 'center', fontSize: 50}}>{counter}</Text>
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
  );
}
