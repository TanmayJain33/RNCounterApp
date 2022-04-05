import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState({firstName: '', lastName: ''});

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <TextInput
        style={{
          height: 40,
          width: 200,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
        value={name.firstName}
        placeholder="Enter your first name"
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
        placeholder="Enter your last name"
        onChangeText={text => setName({...name, lastName: text})}
      />
      <Text>Your first name is {name.firstName}</Text>
      <Text>Your last name is {name.lastName}</Text>
    </View>
  );
}
