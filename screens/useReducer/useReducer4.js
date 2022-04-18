import React, {useReducer, createContext} from 'react';
import {View, Text} from 'react-native';
import ComponentC from '../../components/ComponentC';

export const CounterContext = createContext();

const initialState = 0;

const reducerFunction = (currentState, action) => {
  switch (action) {
    case 'increment':
      return currentState + 1;
    case 'decrement':
      return currentState - 1;
    case 'reset':
      return initialState;
    default:
      return currentState;
  }
};

export default function UseReducer4() {
  const [counter, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '500',
          color: '#000',
          textAlign: 'center',
        }}>
        Counter using useReducer() and useContext()
      </Text>
      <CounterContext.Provider
        value={{counterState: counter, counterDispatch: dispatch}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 50, textAlign: 'center', color: '#000'}}>
            {counter}
          </Text>
          <ComponentC />
        </View>
      </CounterContext.Provider>
    </>
  );
}
