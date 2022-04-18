import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';

export default function CustomTextInput({
  onChangeText,
  style,
  value,
  label,
  icon,
  error,
  iconPosition,
  placeholder,
  multiline,
  maxlength,
  keyboardType,
  editable,
  secureTextEntry,
}) {
  const [focused, setFocused] = useState(false);

  function getFlexDirection() {
    if (icon && iconPosition) {
      if (iconPosition == 'left') {
        return 'row';
      } else if (iconPosition == 'right') {
        return 'row-reverse';
      }
    } else {
      return 'row';
    }
  }

  function getBorderColor() {
    if (error) {
      return '#f72585';
    }
    if (focused) {
      return '#4361ee';
    } else {
      return '#adb5bd';
    }
  }

  return (
    <View style={{paddingVertical: 12, marginHorizontal: 20}}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          {
            alignItems: 'center',
            height: multiline ? 84 : 42,
            borderWidth: 1,
            borderRadius: 4,
            paddingHorizontal: 5,
            marginTop: 5,
            flexDirection: getFlexDirection(),
          },
          {borderColor: getBorderColor()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          onChangeText={onChangeText}
          style={{flex: 1, width: '100%', ...style}}
          value={value}
          placeholder={placeholder}
          multiline={multiline}
          maxLength={maxlength}
          keyboardType={keyboardType}
          editable={editable}
          secureTextEntry={secureTextEntry}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
        />
      </View>
      {error && (
        <Text style={{paddingTop: 4, fontSize: 12, color: '#f72585'}}>
          {error}
        </Text>
      )}
    </View>
  );
}
