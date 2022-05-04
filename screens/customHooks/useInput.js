import {useState} from 'react';

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const reset = () => {
    setValue(initialValue);
  };

  const bind = {
    value: value,
    onChangeText: text => {
      setValue(text);
    },
  };

  return [value, bind, reset];
}
