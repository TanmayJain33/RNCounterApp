import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function CustomComponentsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <Text style={{fontSize: 20, fontWeight: '700', color: '#000'}}>
          Custom Text Component
        </Text>
        <TouchableOpacity
          style={{
            margin: 5,
            marginLeft: 10,
            backgroundColor: '#605ff0',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('CustomTextScreen')}>
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
          Custom TextInput Component
        </Text>
        <TouchableOpacity
          style={{
            margin: 5,
            marginLeft: 10,
            backgroundColor: '#605ff0',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('CustomTextInputScreen')}>
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
          Custom Button Component
        </Text>
        <TouchableOpacity
          style={{
            margin: 5,
            marginLeft: 10,
            backgroundColor: '#605ff0',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('CustomButtonScreen')}>
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
          Custom Alert Component
        </Text>
        <TouchableOpacity
          style={{
            margin: 5,
            marginLeft: 10,
            backgroundColor: '#605ff0',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('CustomAlertScreen')}>
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
          Custom Modal Component
        </Text>
        <TouchableOpacity
          style={{
            margin: 5,
            marginLeft: 10,
            backgroundColor: '#605ff0',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('CustomModalScreen')}>
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
          Custom Toast Component
        </Text>
        <TouchableOpacity
          style={{
            margin: 5,
            marginLeft: 10,
            backgroundColor: '#605ff0',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('CustomToastScreen')}>
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
          Custom Card Component
        </Text>
        <TouchableOpacity
          style={{
            margin: 5,
            marginLeft: 10,
            backgroundColor: '#605ff0',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('CustomCardScreen')}>
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
          Custom Image Gallery
        </Text>
        <TouchableOpacity
          style={{
            margin: 5,
            marginLeft: 10,
            backgroundColor: '#605ff0',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('CustomImageGalleryScreen')}>
          <Text style={{fontSize: 15, color: '#fff', padding: 10}}>
            Click Here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
