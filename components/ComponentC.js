import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {UserContext, AgeContext} from '../App';

export default function ComponentC() {
  const user = useContext(UserContext);
  const age = useContext(AgeContext);

  return (
    <View>
      <Text>
        {user} - {age}
      </Text>
    </View>
  );
}
