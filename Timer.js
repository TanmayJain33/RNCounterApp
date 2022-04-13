import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Button} from 'react-native';

export default function Timer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <View>
      <Text style={{fontSize: 20, marginBottom: 10}}>
        Timer - {timer} seconds
      </Text>
      <Button
        title="Clear Timer"
        onPress={() => clearInterval(intervalRef.current)}
      />
    </View>
  );
}
