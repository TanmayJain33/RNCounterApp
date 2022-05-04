import React from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import useInput from '../screens/customHooks/useInput';

export default function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');

  const submitHandler = () => {
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <View>
      <Text>First Name</Text>
      <View
        style={{
          width: 200,
          alignItems: 'center',
          height: 40,
          borderWidth: 1,
          paddingHorizontal: 5,
          marginTop: 5,
          marginBottom: 20,
        }}>
        <TextInput
          keyboardType="default"
          value={bindFirstName.value}
          onChangeText={bindFirstName.onChangeText}
          style={{width: '100%', flex: 1}}
          placeholder="Enter your first name"
        />
      </View>
      <Text>Last Name</Text>
      <View
        style={{
          width: 200,
          alignItems: 'center',
          height: 40,
          borderWidth: 1,
          paddingHorizontal: 5,
          marginTop: 5,
          marginBottom: 50,
        }}>
        <TextInput
          keyboardType="default"
          value={bindLastName.value}
          onChangeText={bindLastName.onChangeText}
          style={{width: '100%', flex: 1}}
          placeholder="Enter your last name"
        />
      </View>
      <Button title="Submit" onPress={submitHandler} />
    </View>
  );
}
