import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import CustomModal from '../../CustomComponents/CustomModal';

export default function CustomModalScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* First Custom Alert
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      /> */}
      {/* Second Custom Alert
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={'Alert Title'}
        message={'This is some message'}
      /> */}
      {/* Third Custom Alert
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={'Alert Title'}
        message={'This is some message'}
        android={{
          container: {
            backgroundColor: 'yellow',
          },
          title: {
            color: 'red',
            fontSize: 26,
            fontWeight: 'normal',
          },
          message: {
            color: 'blue',
            fontSize: 16,
            fontWeight: 'normal',
          },
        }}
      /> */}
      {/* Fourth Custom Alert
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={'Alert Title'}
        message={'This is some message'}
        android={{
          container: {
            backgroundColor: 'yellow',
          },
          title: {
            color: 'red',
            fontSize: 26,
            fontWeight: 'normal',
          },
          message: {
            color: 'blue',
            fontSize: 16,
            fontWeight: 'normal',
          },
        }}
        buttons={[{}, {}]}
      /> */}
      {/* Fifth Custom Alert
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={'Alert Title'}
        message={'This is some message'}
        android={{
          container: {
            backgroundColor: 'yellow',
          },
          title: {
            color: 'red',
            fontSize: 26,
            fontWeight: 'normal',
          },
          message: {
            color: 'blue',
            fontSize: 16,
            fontWeight: 'normal',
          },
        }}
        buttons={[{}, {}, {}]}
      /> */}
      {/* Sixth Custom Alert */}
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={'Alert Title'}
        message={'This is some message'}
        android={{
          container: {
            backgroundColor: 'yellow',
          },
          title: {
            color: 'red',
            fontSize: 26,
            fontWeight: 'normal',
          },
          message: {
            color: 'blue',
            fontSize: 16,
            fontWeight: 'normal',
          },
        }}
        buttons={[
          {
            text: 'no',
          },
          {
            text: 'Yes',
            func: () => {
              console.log('Yes Pressed');
            },
            styles: {
              color: '#fff',
              fontSize: 18,
              fontWeight: 'bold',
              textTransform: 'none',
              backgroundColor: '#000',
            },
          },
        ]}
      />
      <View>
        <Pressable
          style={{
            borderRadius: 20,
            padding: 10,
            elevation: 2,
            backgroundColor: '#f194ff',
          }}
          onPress={() => setModalVisible(true)}>
          <Text
            style={{color: 'white', fontWeight: '700', textAlign: 'center'}}>
            Show Modal
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
