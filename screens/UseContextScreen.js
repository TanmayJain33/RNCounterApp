import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function UseContextScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text style={{fontSize: 20, fontWeight: '700', color: '#000'}}>
          data access with context API
        </Text>
        <TouchableOpacity
          style={{
            margin: 5,
            marginLeft: 10,
            backgroundColor: '#605ff0',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('UseContext1')}>
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text style={{fontSize: 20, fontWeight: '700', color: '#000'}}>
          data access with useContext()
        </Text>
        <TouchableOpacity
          style={{
            margin: 5,
            marginLeft: 10,
            backgroundColor: '#605ff0',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('UseContext2')}>
          <Text style={{fontSize: 15, color: '#fff', padding: 10}}>
            Click Here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
