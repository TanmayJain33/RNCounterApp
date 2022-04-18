import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function HooksScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <Text style={{fontSize: 30, fontWeight: '700', color: '#000'}}>
          useState() Hook
        </Text>
        <TouchableOpacity
          style={{
            margin: 5,
            marginLeft: 10,
            backgroundColor: '#605ff0',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('UseStateScreen')}>
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
        <Text style={{fontSize: 30, fontWeight: '700', color: '#000'}}>
          useEffect() Hook
        </Text>
        <TouchableOpacity
          style={{
            margin: 5,
            marginLeft: 10,
            backgroundColor: '#605ff0',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('UseEffectScreen')}>
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
        <Text style={{fontSize: 30, fontWeight: '700', color: '#000'}}>
          useContext() Hook
        </Text>
        <TouchableOpacity
          style={{
            margin: 5,
            marginLeft: 10,
            backgroundColor: '#605ff0',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('UseContextScreen')}>
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
        <Text style={{fontSize: 30, fontWeight: '700', color: '#000'}}>
          useReducer() Hook
        </Text>
        <TouchableOpacity
          style={{
            margin: 5,
            marginLeft: 10,
            backgroundColor: '#605ff0',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('UseReducerScreen')}>
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
        <Text style={{fontSize: 30, fontWeight: '700', color: '#000'}}>
          useCallback() Hook
        </Text>
        <TouchableOpacity
          style={{
            margin: 5,
            marginLeft: 10,
            backgroundColor: '#605ff0',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('UseCallbackScreen')}>
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
        <Text style={{fontSize: 30, fontWeight: '700', color: '#000'}}>
          useMemo() Hook
        </Text>
        <TouchableOpacity
          style={{
            margin: 5,
            marginLeft: 10,
            backgroundColor: '#605ff0',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('UseMemoScreen')}>
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
        <Text style={{fontSize: 30, fontWeight: '700', color: '#000'}}>
          useRef() Hook
        </Text>
        <TouchableOpacity
          style={{
            margin: 5,
            marginLeft: 10,
            backgroundColor: '#605ff0',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('UseRefScreen')}>
          <Text style={{fontSize: 15, color: '#fff', padding: 10}}>
            Click Here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
