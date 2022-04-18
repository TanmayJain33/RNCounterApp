import React from 'react';
import {View, Text} from 'react-native';
import {UserContext, AgeContext} from '../screens/useContext/UseContext1';

export default function ComponentA() {
  return (
    <View>
      <UserContext.Consumer>
        {user => {
          return (
            <AgeContext.Consumer>
              {age => {
                return (
                  <Text
                    style={{fontSize: 20, textAlign: 'center', color: '#000'}}>
                    User context value is {user} and Age context value is {age}.
                  </Text>
                );
              }}
            </AgeContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </View>
  );
}
