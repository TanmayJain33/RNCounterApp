import React from 'react';
import {View, Text, Button} from 'react-native';
import useFetch from '../customHooks/useFetch';

export default function UseFetchHook() {
  const {quote, loading, error, author, pressHandler} = useFetch(
    'https://api.quotable.io/random',
  );

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{margin: 50}}>
        {loading && <Text>{loading}</Text>}
        {quote && (
          <Text
            style={{
              textAlign: 'center',
              color: '#000',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            "{quote}"
          </Text>
        )}
        {author && (
          <Text
            style={{
              textAlign: 'right',
              color: '#666',
              fontSize: 16,
              fontStyle: 'italic',
            }}>
            --- {author}
          </Text>
        )}
        {error && <Text>{error}</Text>}
      </View>
      <Button title="Load Quote" onPress={pressHandler} />
    </View>
  );
}
