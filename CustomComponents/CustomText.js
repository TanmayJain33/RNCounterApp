import React from 'react';
import {View, Text} from 'react-native';

export default function CustomText({
  title,
  style,
  onPress,
  numberOfLines,
  bgColor,
  fontStyle,
  textAlign,
  letterSpacing,
  lineHeight,
}) {
  return (
    <View style={{justifyContent: 'center'}}>
      <Text
        style={{
          textAlign: textAlign,
          fontStyle: fontStyle,
          backgroundColor: bgColor,
          letterSpacing: letterSpacing,
          lineHeight: lineHeight,
          ...style,
        }}
        onPress={onPress}
        numberOfLines={numberOfLines}>
        {title}
      </Text>
    </View>
  );
}
