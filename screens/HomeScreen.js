import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 40, fontWeight: '700', color: '#000'}}>
          Hooks
        </Text>
        <TouchableOpacity
          style={{
            margin: 5,
            marginLeft: 10,
            backgroundColor: '#605ff0',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('HooksScreen')}>
          <Text style={{fontSize: 20, color: '#fff', padding: 10}}>
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
      <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 40, fontWeight: '700', color: '#000'}}>
          Custom Components
        </Text>
        <TouchableOpacity
          style={{
            margin: 5,
            marginLeft: 10,
            backgroundColor: '#605ff0',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('CustomComponentsScreen')}>
          <Text style={{fontSize: 20, color: '#fff', padding: 10}}>
            Click Here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
