import React from 'react';
import {Text, ScrollView} from 'react-native';
import CustomTextInput from '../../CustomComponents/CustomTextInput';

export default function CustomTextInputScreen() {
  return (
    <>
      <ScrollView>
        <CustomTextInput label="Username" placeholder="Enter name" />
        <CustomTextInput
          label="Password"
          icon={<Text>HIDE</Text>}
          iconPosition="right"
          placeholder="Enter password"
          secureTextEntry={true}
        />
        <CustomTextInput
          label="Error"
          error="This field is required"
          value="This cannot be edited"
          editable={false}
        />
        <CustomTextInput label="Multiline" multiline={true} />
        <CustomTextInput
          label="Enter 4 digit PIN"
          maxlength={4}
          keyboardType="numeric"
        />
      </ScrollView>
    </>
  );
}
