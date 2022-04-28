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
  style,
  textTransform,
}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            backgroundColor: type == 'filled' ? btnColor : 'transparent',
            width: width,
            height: height,
            borderRadius: borderRadius,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: type == 'outlined' ? 2 : 0,
            borderColor: type == 'outlined' ? borderColor : null,
            ...style,
          }}>
          {icon && <View>{icon}</View>}
          {text && (
            <Text
              style={{
                color: textColor,
                fontSize: fontSize,
                textTransform: textTransform,
                textAlign: 'center',
                paddingHorizontal: icon ? 10 : 0,
              }}>
              {text}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}
