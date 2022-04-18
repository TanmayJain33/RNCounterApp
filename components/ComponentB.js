import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {UserContext, AgeContext} from '../screens/useContext/UseContext2';

export default function ComponentB() {
  const user = useContext(UserContext);
  const age = useContext(AgeContext);

  return (
    <View>
      <Text style={{fontSize: 20, textAlign: 'center', color: '#000'}}>
        User context value is {user} and Age context value is {age}.
      </Text>
    </View>
  );
}
