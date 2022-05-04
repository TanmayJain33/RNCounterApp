import {useState} from 'react';

export default function useColorPicker(initialValue) {
  const [color, setColor] = useState(initialValue);

  const reset = () => {
    setColor(initialValue);
  };

  const changeColor = {
    value: color,
    onChangeText: text => {
      setColor(text);
    },
  };

  return [color, changeColor, reset];
}
