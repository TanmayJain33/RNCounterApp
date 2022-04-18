import React, {useEffect, useRef} from 'react';
import {View, TextInput} from 'react-native';

export default function FocusInput() {
  const textInputRef = useRef(null);

  useEffect(() => {
    //focus the TextInput element
    textInputRef.current.focus();
  }, []);

  return (
    <View>
      <TextInput
        ref={textInputRef}
        keyboardType="default"
        style={{
          height: 40,
          width: 300,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
      />
    </View>
  );
}
