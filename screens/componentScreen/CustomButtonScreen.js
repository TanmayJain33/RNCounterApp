import React from 'react';
import {View} from 'react-native';
import CustomButton from '../../CustomComponents/CustomButton';
import Login from 'react-native-vector-icons/MaterialIcons';
import Facebook from 'react-native-vector-icons/MaterialIcons';
import GitHub from 'react-native-vector-icons/Ionicons';

export default function CustomButtonScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CustomButton
        text="Large button"
        width={300}
        height={100}
        type="filled"
        btnColor="green"
        fontSize={32}
        borderRadius={10}
        textColor="#fff"
        onPress={() => console.log('Large button clicked')}
      />
      <CustomButton
        text="Small button"
        width={100}
        type="filled"
        btnColor="pink"
        fontSize={12}
        textColor="red"
        borderRadius={50}
        onPress={() => console.log('Small button clicked')}
      />
      <CustomButton
        text="Outlined button"
        width={180}
        type="outlined"
        textColor="black"
        borderColor="blue"
      />
      <CustomButton
        text="Login with Password"
        width={250}
        height={50}
        btnColor="#777"
        type="filled"
        fontSize={18}
        textColor="#fff"
        icon={<Login name="login" size={20} color="#fff" />}
      />
      <CustomButton
        text="Login with Facebook"
        width={250}
        height={50}
        fontSize={18}
        btnColor="#3b5998"
        type="filled"
        textColor="#fff"
        icon={<Facebook name="facebook" size={20} color="#fff" />}
      />
      <CustomButton
        text="Login with GitHub"
        width={250}
        height={50}
        btnColor="#14191e"
        type="filled"
        fontSize={18}
        textColor="#fff"
        icon={<GitHub name="logo-github" size={18} color="#fff" />}
      />
    </View>
  );
}
