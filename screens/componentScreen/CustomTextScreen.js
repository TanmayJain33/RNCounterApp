import React from 'react';
import CustomText from '../../CustomComponents/CustomText';

export default function CustomTextScreen() {
  return (
    <>
      <CustomText title="Text without style" />
      <CustomText
        title="Styled Text"
        style={{color: 'red', fontSize: 20, fontWeight: '700'}}
        textAlign="right"
      />
      <CustomText
        title="Pressable Text"
        style={{color: 'blue', fontSize: 20, fontWeight: '700'}}
        onPress={() => {
          console.log('Text Pressed');
        }}
        textAlign="center"
        letterSpacing={10}
      />
      <CustomText
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales venenatis dapibus. Ut cursus, erat suscipit hendrerit posuere, dui elit efficitur dolor, id volutpat diam tortor id orci."
        style={{color: 'green', fontSize: 20, fontWeight: '700'}}
        numberOfLines={3}
      />
      <CustomText
        title="Text with background color"
        style={{color: 'blue', fontSize: 20, fontWeight: '700'}}
        bgColor="yellow"
        textAlign="center"
        lineHeight={100}
      />
      <CustomText
        title="Text with fontStyle"
        style={{color: 'black', fontSize: 20, fontWeight: '700'}}
        fontStyle="italic"
        bgColor="orange"
        letterSpacing={5}
      />
    </>
  );
}
