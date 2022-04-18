import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

export default function UseState3() {
  const [name, setName] = useState({firstName: '', lastName: ''});

  return (
    <>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '500',
          color: '#000',
          textAlign: 'center',
        }}>
        useState() with objects
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
          value={name.firstName}
          placeholder="Enter yout first name"
          onChangeText={text => setName({...name, firstName: text})}
        />
        <TextInput
          style={{
            height: 40,
            width: 200,
            margin: 12,
            borderWidth: 1,
            padding: 10,
          }}
          value={name.lastName}
          placeholder="Enter yout last name"
          onChangeText={text => setName({...name, lastName: text})}
        />
        <Text>Your first name is {name.firstName}</Text>
        <Text>Your last name is {name.lastName}</Text>
      </View>
    </>
  );
}
