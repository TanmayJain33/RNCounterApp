import {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

export default function useNetwork() {
  let NetInfoSubscribtion = null;

  const [connectionStatus, setConnectionStatus] = useState(false);
  const [connectionType, setConnectionType] = useState(null);
  const [connectionNetReachable, setConnectionNetReachable] = useState(false);
  const [connectionWifiEnabled, setConnectionWifiEnabled] = useState(false);
  const [connectionDetails, setConnectionDetails] = useState(null);

  useEffect(() => {
    NetInfoSubscribtion = NetInfo.addEventListener(handleConnectivityChange);
    return () => {
      NetInfoSubscribtion && NetInfoSubscribtion();
    };
  }, []);

  function handleConnectivityChange(state) {
    setConnectionStatus(state.isConnected);
    setConnectionType(state.type);
    setConnectionNetReachable(state.isInternetReachable);
    setConnectionWifiEnabled(state.isWifiEnabled);
    setConnectionDetails(state.details);
  }

  return [
    connectionStatus,
    connectionType,
    connectionNetReachable,
    connectionWifiEnabled,
    connectionDetails,
  ];
}
