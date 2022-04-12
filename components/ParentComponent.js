import React, {useState, useCallback} from 'react';
import {View} from 'react-native';
import Title from './Title';
import Button from './CommonButton';
import Count from './Count';

export default function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <View>
      <Title />
      <Count text="Age" count={age} />
      <Button title="Increment Age" handleClick={incrementAge} />
      <Count text="Salary" count={salary} />
      <Button title="Increment Salary" handleClick={incrementSalary} />
    </View>
  );
}
