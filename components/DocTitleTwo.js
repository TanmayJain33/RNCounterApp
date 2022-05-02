import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import useDocumentTitle from '../screens/customHooks/useDocumentTitle';

export default function DocTitleTwo() {
  const {count, changeCounter} = useDocumentTitle();

  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 50, margin: 10}}>{count}</Text>
      <TouchableOpacity
        onPress={changeCounter}
        style={{backgroundColor: '#66aaff', padding: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Count - {count}</Text>
      </TouchableOpacity>
    </View>
  );
}
