import React from 'react';
import {View, Text} from 'react-native';
import useNetwork from '../customHooks/useNetwork';

export default function UseNetworkHook() {
  const [
    connectionStatus,
    connectionType,
    connectionNetReachable,
    connectionWifiEnabled,
    connectionDetails,
  ] = useNetwork();

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#2193b0',
      }}>
      <Text
        style={{fontSize: 18, textAlign: 'center', margin: 10, color: '#fff'}}>
        Connection Status: {connectionStatus ? 'Connected' : 'Disconnected'}
      </Text>
      <Text
        style={{fontSize: 18, textAlign: 'center', margin: 10, color: '#fff'}}>
        Connection Type: {connectionType}
      </Text>
      <Text
        style={{fontSize: 18, textAlign: 'center', margin: 10, color: '#fff'}}>
        Internet Reachable: {connectionNetReachable ? 'YES' : 'NO'}
      </Text>
      <Text
        style={{fontSize: 18, textAlign: 'center', margin: 10, color: '#fff'}}>
        Wifi Enabled: {connectionWifiEnabled ? 'YES' : 'NO'}
      </Text>

      <Text
        style={{fontSize: 18, textAlign: 'center', margin: 10, color: '#fff'}}>
        Connection Details : {'\n'}
        {connectionType == 'wifi'
          ? (connectionDetails.isConnectionExpensive
              ? 'Connection Expensive: YES'
              : 'Connection Expensive: NO') +
            '\n' +
            'ssid: ' +
            connectionDetails.ssid +
            '\n' +
            'bssid: ' +
            connectionDetails.bssid +
            '\n' +
            'strength: ' +
            connectionDetails.strength +
            '\n' +
            'ipAddress: ' +
            connectionDetails.ipAddress +
            '\n' +
            'subnet: ' +
            connectionDetails.subnet +
            '\n' +
            'frequency: ' +
            connectionDetails.frequency
          : connectionType == 'cellular'
          ? (connectionDetails.isConnectionExpensive
              ? 'Connection Expensive: YES'
              : 'Connection Expensive: NO') +
            '\n' +
            'cellularGeneration: ' +
            connectionDetails.cellularGeneration +
            '\n' +
            'carrier: ' +
            connectionDetails.carrier
          : '---'}
      </Text>
    </View>
  );
}
