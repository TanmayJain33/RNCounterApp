import {useState} from 'react';

export default function useCounter(initialCounter, value) {
  const [counter, setCounter] = useState(initialCounter);

  function increment() {
    setCounter(counter + value);
  }

  function decrement() {
    setCounter(counter - value);
  }

  function reset() {
    setCounter(initialCounter);
  }

  return {counter, increment, decrement, reset};
}
