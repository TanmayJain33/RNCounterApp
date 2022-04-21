import React from 'react';
import {View, Text, Animated, TouchableOpacity, Dimensions} from 'react-native';
import Circle from 'react-native-vector-icons/AntDesign';
import Cross from 'react-native-vector-icons/Entypo';

export default function CustomToast({popAnim, status}) {
  const windowHeight = Dimensions.get('window').height;

  const successColor = '#6dcf81';
  const successHeader = 'Success!';
  const successMessage = 'You pressed the success button';
  const failColor = '#bf6060';
  const failHeader = 'Failed!';
  const failMessage = 'You pressed the fail button';
  const infoColor = '#55aaff';
  const infoHeader = 'Info!';
  const infoMessage = 'You pressed the info button';

  const instantPopOut = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * -1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <Animated.View
        style={[
          {
            height: 60,
            width: 350,
            backgroundColor: '#f5f5f5',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
          {
            transform: [{translateY: popAnim}],
          },
        ]}>
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Circle
            name={
              status == 'success'
                ? 'checkcircle'
                : status == 'fail'
                ? 'closecircle'
                : 'infocirlce'
            }
            size={24}
            color={
              status == 'success'
                ? successColor
                : status == 'fail'
                ? failColor
                : infoColor
            }
          />
          <View style={{width: '70%', padding: 2}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>
              {status == 'success'
                ? successHeader
                : status == 'fail'
                ? failHeader
                : infoHeader}
            </Text>
            <Text style={{fontSize: 12}}>
              {status == 'success'
                ? successMessage
                : status == 'fail'
                ? failMessage
                : infoMessage}
            </Text>
          </View>
          <TouchableOpacity onPress={instantPopOut}>
            <Cross name="cross" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}
