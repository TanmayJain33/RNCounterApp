import React, {createContext} from 'react';
import {View, Text} from 'react-native';
import ComponentA from '../../components/ComponentA';

export const UserContext = createContext();
export const AgeContext = createContext();

export default function UseContext1() {
  return (
    <>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '500',
          color: '#000',
          textAlign: 'center',
        }}>
        Passing data to nested component without useContext()
      </Text>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <UserContext.Provider value={'Tanmay'}>
          <AgeContext.Provider value={22}>
            <ComponentA />
          </AgeContext.Provider>
        </UserContext.Provider>
      </View>
    </>
  );
}
