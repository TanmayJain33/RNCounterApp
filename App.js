import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

class App extends React.Component {
  state = {
    counter: 0,
    buttonEnabled: true,
  };
  render() {
    const counter = this.state.counter;
    const buttonColor = this.state.buttonEnabled ? 'red' : 'blue';
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text style={{textAlign: 'center', fontSize: 50}}>{counter}</Text>
        <Button
          title="Increment"
          onPress={() => {
            this.setState({counter: counter + 1});
          }}
        />
        <View style={{margin: 10}} />
        <Button
          title="Decrement"
          onPress={() => {
            this.setState({counter: counter - 1});
          }}
        />
        <TouchableOpacity
          style={{marginTop: 20, padding: 10, backgroundColor: buttonColor}}
          onPress={() => {
            this.setState({
              counter: 0,
              buttonEnabled: !this.state.buttonEnabled,
            });
          }}>
          <Text style={{color: 'white', fontWeight: '700'}}>RESET</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
