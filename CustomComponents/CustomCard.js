import React from 'react';
import {View, Text, Image} from 'react-native';

export default function CustomCard({
  title,
  icon,
  description,
  width,
  bgColor,
  titleColor,
  borderRadius,
  descColor,
}) {
  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          borderRadius: borderRadius,
          elevation: 3,
          backgroundColor: bgColor ? bgColor : '#fff',
          shadowOffset: {width: 1, height: 1},
          shadowColor: '#333',
          shadowOpacity: 0.3,
          shadowRadius: 2,
          marginVertical: 6,
          width: width == 'long' ? '95%' : '50%',
        }}>
        <View
          style={{
            marginHorizontal: 18,
            marginVertical: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {title && (
            <Text style={{fontSize: 18, color: titleColor, fontWeight: 'bold'}}>
              {title}
            </Text>
          )}
          {icon && <View style={{marginHorizontal: 5}}>{icon}</View>}
        </View>
        {description && (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <Text style={{fontSize: 15, color: descColor, textAlign: 'center'}}>
              {description}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
