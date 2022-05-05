import {useState} from 'react';
import axios from 'axios';

export default function useFetch(url) {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const pressHandler = () => {
    setLoading('Loading...');
    setQuote(null);
    setAuthor(null);
    setError(null);
    const source = axios.CancelToken.source();
    axios
      .get(url, {cancelToken: source.token})
      .then(res => {
        setLoading(false);
        res.data.content && setQuote(res.data.content);
        res.data.author && setAuthor(res.data.author);
      })
      .catch(err => {
        setLoading(false);
        setError('An error occurred');
      });
    return () => {
      source.cancel();
    };
  };

  return {quote, loading, error, author, pressHandler};
}
