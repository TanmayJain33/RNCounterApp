import React from 'react';
import {Button} from 'react-native';

function CommonButton({handleClick, children, title}) {
  console.log('Rendering button - ', title);
  return (
    <Button onPress={handleClick} title={title}>
      {children}
    </Button>
  );
}

export default React.memo(CommonButton);
