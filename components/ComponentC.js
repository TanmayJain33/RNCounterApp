import React from 'react';
import {View, Text} from 'react-native';
import {UserContext, AgeContext} from '../App';

export default function ComponentC() {
  return (
    <View>
      <UserContext.Consumer>
        {user => {
          return (
            <AgeContext.Consumer>
              {age => {
                return (
                  <Text>
                    User context value is {user} and Age context value is {age}
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
