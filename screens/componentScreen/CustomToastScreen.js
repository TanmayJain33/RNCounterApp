import React, {useState, useRef} from 'react';
import {View, Button, Animated, Dimensions} from 'react-native';
import CustomToast from '../../CustomComponents/CustomToast';

export default function CustomToastScreen() {
  const windowHeight = Dimensions.get('window').height;
  const [toastStatus, setToastStatus] = useState(null);
  const popAnim = useRef(new Animated.Value(windowHeight * -1)).current;

  const popIn = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * 0.43 * -1,
      duration: 300,
      useNativeDriver: true,
    }).start(popOut());
  };

  const popOut = () => {
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: windowHeight * -1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 2000);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Show Success Toast"
        onPress={() => {
          setToastStatus('success');
          popIn();
        }}
      />
      <View style={{margin: 10}} />
      <Button
        title="Show Failed Toast"
        onPress={() => {
          setToastStatus('fail');
          popIn();
        }}
      />
      <View style={{margin: 10}} />
      <Button
        title="Show Info Toast"
        onPress={() => {
          setToastStatus('info');
          popIn();
        }}
      />
      <CustomToast popAnim={popAnim} status={toastStatus} />
    </View>
  );
}
