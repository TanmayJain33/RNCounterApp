import React from 'react';
import {View} from 'react-native';
import DocTitleOne from '../../components/DocTitleOne';
import DocTitleTwo from '../../components/DocTitleTwo';

export default function UseDocumentTitleHook() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <DocTitleOne />
      <DocTitleTwo />
    </View>
  );
}
