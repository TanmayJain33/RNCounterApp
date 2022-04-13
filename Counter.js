import React, {useState, useMemo} from 'react';
import {View, Button, Text} from 'react-native';

export default function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return counterOne % 2 == 0;
  }, [counterOne]);

  return (
    <View>
      <Text style={{fontSize: 20, textAlign: 'center'}}>
        Counter 1 - {counterOne}
      </Text>
      <Button title="Increment Counter 1" onPress={incrementOne} />
      <Text style={{fontSize: 20, textAlign: 'center'}}>
        {isEven ? 'Even' : 'Odd'}
      </Text>
      <View style={{margin: 10}} />
      <Text style={{fontSize: 20, textAlign: 'center'}}>
        Counter 2 - {counterTwo}
      </Text>
      <Button title="Increment Counter 2" onPress={incrementTwo} />
    </View>
  );
}
