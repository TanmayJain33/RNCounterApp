import React, {useState} from 'react';
import {
  ScrollView,
  ImageBackground,
  Dimensions,
  View,
  Text,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from 'react-native-check-box';
import CustomText from '../../CustomComponents/CustomText';
import CustomTextInput from '../../CustomComponents/CustomTextInput';
import CustomButton from '../../CustomComponents/CustomButton';

export default function LoginUIScreen() {
  const [checked, isChecked] = useState(false);

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#fff'}}
      showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require('../../assets/background.jpeg')}
        style={{
          height: Dimensions.get('window').height / 2.5,
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icons name="location-sharp" color="#fff" size={100} />
          <CustomText
            title="VISION GO"
            style={{color: '#fff', fontSize: 40, fontWeight: 'bold'}}
          />
        </View>
      </ImageBackground>
      <View
        style={{
          flex: 1.5,
          backgroundColor: '#fff',
          bottom: 50,
          borderTopStartRadius: 60,
          borderTopEndRadius: 60,
        }}>
        <View style={{padding: 40}}>
          <CustomText
            title="Welcome"
            style={{color: '#4632a1', fontSize: 34}}
          />
          <Text>
            Don't have an account?{' '}
            <Text style={{color: 'red', fontStyle: 'italic'}}>
              Register now
            </Text>
          </Text>
          <View style={{marginTop: 30}}>
            <CustomTextInput
              placeholder="design@test.com"
              label="Email"
              keyboardType="email-address"
              style={{flex: 1, width: '100%'}}
              borderColor="#4632a1"
              icon={<Icons name="checkmark" color="#4632a1" size={20} />}
              iconPosition="right"
            />
            <CustomTextInput
              placeholder="******"
              label="Password"
              style={{flex: 1, width: '100%'}}
              borderColor="#4632a1"
              icon={<Icons name="eye" color="#4632a1" size={20} />}
              iconPosition="right"
              secureTextEntry={true}
            />
          </View>
          <View
            style={{
              height: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CheckBox
                style={{marginRight: 5}}
                isChecked={checked}
                checkBoxColor="#4632a1"
                onClick={() => {
                  isChecked(!checked);
                }}
              />
              <CustomText title="Remember Me" style={{color: '#8f9195'}} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CustomText title="Forgot Password" style={{color: '#8f9195'}} />
            </View>
          </View>
          <View
            style={{
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CustomButton
              btnColor="#4632a1"
              width={200}
              height={40}
              type="filled"
              borderRadius={100}
              style={{
                shadowOffset: {
                  width: 1,
                  height: 10,
                },
                shadowOpacity: 0.4,
                shadowRadius: 1,
                elevation: 10,
                shadowColor: '#00acee',
              }}
              text="Log in"
              textColor="#fff"
            />
          </View>
          <View>
            <CustomText title="or Login with" style={{textAlign: 'center'}} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
              }}>
              <CustomButton
                btnColor="#0165e1"
                width={50}
                height={40}
                type="filled"
                borderRadius={100}
                style={{
                  shadowOffset: {
                    width: 1,
                    height: 10,
                  },
                  shadowOpacity: 0.4,
                  shadowRadius: 1,
                  elevation: 10,
                  shadowColor: '#555',
                }}
                icon={<Icon name="facebook" size={28} color="#fff" />}
              />
              <CustomButton
                btnColor="#1d9bf0"
                width={50}
                height={40}
                type="filled"
                borderRadius={100}
                style={{
                  shadowOffset: {
                    width: 1,
                    height: 10,
                  },
                  shadowOpacity: 0.4,
                  shadowRadius: 1,
                  elevation: 10,
                  shadowColor: '#555',
                }}
                icon={<Icon name="twitter" size={28} color="#fff" />}
              />
              <CustomButton
                btnColor="#d34836"
                width={50}
                height={40}
                type="filled"
                borderRadius={100}
                style={{
                  shadowOffset: {
                    width: 1,
                    height: 10,
                  },
                  shadowOpacity: 0.4,
                  shadowRadius: 1,
                  elevation: 10,
                  shadowColor: '#555',
                }}
                icon={<Icon name="google-plus" size={28} color="#fff" />}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
