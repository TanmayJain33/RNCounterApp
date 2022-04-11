import React, {useReducer, createContext} from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import {View, Text} from 'react-native';

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

export default function App() {
  const [counter, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <CounterContext.Provider
      value={{counterState: counter, counterDispatch: dispatch}}>
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <Text style={{fontSize: 50, textAlign: 'center'}}>{counter}</Text>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </View>
    </CounterContext.Provider>
  );
}
