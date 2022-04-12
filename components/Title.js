import React from 'react';
import {Text} from 'react-native';

function Title() {
  console.log('Rendering Title');
  return <Text style={{fontSize: 24}}>useCallback Hook</Text>;
}

export default React.memo(Title);
