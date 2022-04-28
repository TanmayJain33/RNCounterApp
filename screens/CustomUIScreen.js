import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function CustomUIScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <Text style={{fontSize: 20, fontWeight: '700', color: '#000'}}>
          Login UI
        </Text>
        <TouchableOpacity
          style={{
            margin: 5,
            marginLeft: 10,
            backgroundColor: '#605ff0',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('LoginUIScreen')}>
          <Text style={{fontSize: 15, color: '#fff', padding: 10}}>
            Click Here
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 1,
          width: '95%',
          backgroundColor: '#000',
        }}
      />
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <Text style={{fontSize: 20, fontWeight: '700', color: '#000'}}>
          Book Store UI
        </Text>
        <TouchableOpacity
          style={{
            margin: 5,
            marginLeft: 10,
            backgroundColor: '#605ff0',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('BookStoreUIScreen')}>
          <Text style={{fontSize: 15, color: '#fff', padding: 10}}>
            Click Here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
