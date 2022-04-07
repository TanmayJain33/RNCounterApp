import React, {createContext} from 'react';
import {View} from 'react-native';
import ComponentC from './components/ComponentC';

export const UserContext = createContext();
export const AgeContext = createContext();

export default function App() {
  return (
    <View>
      <UserContext.Provider value={'Tanmay'}>
        <AgeContext.Provider value={22}>
          <ComponentC />
        </AgeContext.Provider>
      </UserContext.Provider>
    </View>
  );
}
