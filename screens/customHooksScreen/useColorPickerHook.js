import React from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import useColorPicker from '../customHooks/useColorPicker';

export default function UseColorPickerHook() {
  const [color, changeColor, reset] = useColorPicker('#000000');

  return (
    <>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',
          color: '#000',
        }}>
        Color Picker
      </Text>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <Text style={{textAlign: 'center', margin: 10}}>Enter Hex Code</Text>
          <View
            style={{
              width: 200,
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
              borderWidth: 1,
              paddingHorizontal: 5,
              marginBottom: 20,
            }}>
            <TextInput
              value={changeColor.value}
              onChangeText={changeColor.onChangeText}
              style={{width: '100%', flex: 1}}
            />
          </View>
        </View>
        <Text style={{marginTop: 20}}>Your Color </Text>
        <View
          style={{
            width: '80%',
            borderWidth: 1,
            height: 200,
            borderRadius: 20,
            marginTop: 10,
            marginBottom: 50,
            marginHorizontal: 50,
            backgroundColor: color,
          }}
        />
        <Button title="Reset" onPress={reset} />
      </View>
    </>
  );
}
