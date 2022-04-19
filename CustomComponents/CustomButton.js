import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function CustomButton({
  onPress,
  text,
  width,
  height,
  type,
  btnColor,
  textColor,
  borderRadius,
  borderColor,
  icon,
  fontSize,
}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            backgroundColor: type == 'filled' ? btnColor : 'transparent',
            paddingVertical: 8,
            width: width,
            height: height,
            borderRadius: borderRadius,
            flexDirection: 'row',
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: type == 'outlined' ? 2 : 0,
            borderColor: type == 'outlined' ? borderColor : null,
          }}>
          <View>{icon && icon}</View>
          <Text
            style={{
              color: textColor,
              fontSize: fontSize,
              textTransform: 'uppercase',
              textAlign: 'center',
              paddingHorizontal: icon ? 10 : 0,
            }}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
