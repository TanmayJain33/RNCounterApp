import React from 'react';
import {View} from 'react-native';
import CustomCard from '../../CustomComponents/CustomCard';
import Hand from 'react-native-vector-icons/Entypo';

export default function CustomCardScreen() {
  return (
    <View>
      <CustomCard
        title="Hello World"
        icon={
          <View>
            <Hand name="hand" size={18} color="red" />
          </View>
        }
        bgColor="pink"
        titleColor="red"
      />
      <CustomCard
        title="Card with description"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab."
        width="long"
        borderRadius={10}
        descColor="blue"
      />
      <CustomCard title="Long Card" width="long" borderRadius={50} />
    </View>
  );
}
