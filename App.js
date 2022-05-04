import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import HooksScreen from './screens/HooksScreen';
import UseStateScreen from './screens/UseStateScreen';
import UseState1 from './screens/useState/UseState1';
import UseState2 from './screens/useState/useState2';
import UseState3 from './screens/useState/UseState3';
import UseEffectScreen from './screens/UseEffectScreen';
import UseEffect1 from './screens/useEffect/useEffect1';
import UseEffect2 from './screens/useEffect/useEffect2';
import UseContextScreen from './screens/UseContextScreen';
import UseContext1 from './screens/useContext/UseContext1';
import UseContext2 from './screens/useContext/UseContext2';
import UseReducerScreen from './screens/UseReducerScreen';
import UseReducer1 from './screens/useReducer/useReducer1';
import UseReducer2 from './screens/useReducer/useReducer2';
import UseReducer3 from './screens/useReducer/useReducer3';
import UseReducer4 from './screens/useReducer/useReducer4';
import UseCallbackScreen from './screens/UseCallbackScreen';
import UseMemoScreen from './screens/UseMemoScreen';
import UseRefScreen from './screens/UseRefScreen';
import CustomComponentsScreen from './screens/CustomComponentsScreen';
import CustomTextScreen from './screens/componentScreen/CustomTextScreen';
import CustomTextInputScreen from './screens/componentScreen/CustomTextInputScreen';
import CustomButtonScreen from './screens/componentScreen/CustomButtonScreen';
import CustomAlertScreen from './screens/componentScreen/CustomAlertScreen';
import CustomModalScreen from './screens/componentScreen/CustomModalScreen';
import CustomToastScreen from './screens/componentScreen/CustomToastScreen';
import CustomCardScreen from './screens/componentScreen/CustomCardScreen';
import CustomImageGalleryScreen from './screens/componentScreen/CustomImageGalleryScreen';
import CustomUIScreen from './screens/CustomUIScreen';
import LoginUIScreen from './screens/customUIScreen/LoginUIScreen';
import BookStoreUIScreen from './screens/customUIScreen/BookStoreUIScreen';
import CustomHooksScreen from './screens/CustomHooksScreen';
import UseDocumentTitleHook from './screens/customHooksScreen/useDocumentTitleHook';
import UseCounterHook from './screens/customHooksScreen/useCounterHook';
import UseInputHook from './screens/customHooksScreen/useInputHook';
import UseColorPickerHook from './screens/customHooksScreen/useColorPickerHook';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="HooksScreen" component={HooksScreen} />
        <Stack.Screen name="UseStateScreen" component={UseStateScreen} />
        <Stack.Screen name="UseState1" component={UseState1} />
        <Stack.Screen name="UseState2" component={UseState2} />
        <Stack.Screen name="UseState3" component={UseState3} />
        <Stack.Screen name="UseEffectScreen" component={UseEffectScreen} />
        <Stack.Screen name="UseEffect1" component={UseEffect1} />
        <Stack.Screen name="UseEffect2" component={UseEffect2} />
        <Stack.Screen name="UseContextScreen" component={UseContextScreen} />
        <Stack.Screen name="UseContext1" component={UseContext1} />
        <Stack.Screen name="UseContext2" component={UseContext2} />
        <Stack.Screen name="UseReducerScreen" component={UseReducerScreen} />
        <Stack.Screen name="UseReducer1" component={UseReducer1} />
        <Stack.Screen name="UseReducer2" component={UseReducer2} />
        <Stack.Screen name="UseReducer3" component={UseReducer3} />
        <Stack.Screen name="UseReducer4" component={UseReducer4} />
        <Stack.Screen name="UseCallbackScreen" component={UseCallbackScreen} />
        <Stack.Screen name="UseMemoScreen" component={UseMemoScreen} />
        <Stack.Screen name="UseRefScreen" component={UseRefScreen} />
        <Stack.Screen
          name="CustomComponentsScreen"
          component={CustomComponentsScreen}
        />
        <Stack.Screen name="CustomTextScreen" component={CustomTextScreen} />
        <Stack.Screen
          name="CustomTextInputScreen"
          component={CustomTextInputScreen}
        />
        <Stack.Screen
          name="CustomButtonScreen"
          component={CustomButtonScreen}
        />
        <Stack.Screen name="CustomAlertScreen" component={CustomAlertScreen} />
        <Stack.Screen name="CustomModalScreen" component={CustomModalScreen} />
        <Stack.Screen name="CustomToastScreen" component={CustomToastScreen} />
        <Stack.Screen name="CustomCardScreen" component={CustomCardScreen} />
        <Stack.Screen
          name="CustomImageGalleryScreen"
          component={CustomImageGalleryScreen}
        />
        <Stack.Screen name="CustomUIScreen" component={CustomUIScreen} />
        <Stack.Screen name="LoginUIScreen" component={LoginUIScreen} />
        <Stack.Screen name="BookStoreUIScreen" component={BookStoreUIScreen} />
        <Stack.Screen name="CustomHooksScreen" component={CustomHooksScreen} />
        <Stack.Screen
          name="UseDocumentTitleHook"
          component={UseDocumentTitleHook}
        />
        <Stack.Screen name="UseCounterHook" component={UseCounterHook} />
        <Stack.Screen name="UseInputHook" component={UseInputHook} />
        <Stack.Screen
          name="UseColorPickerHook"
          component={UseColorPickerHook}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
