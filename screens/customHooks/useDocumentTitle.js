import {useState} from 'react';

const useDocumentTitle = () => {
  const [count, setCount] = useState(0);

  const changeCounter = () => {
    setCount(count + 1);
  };

  return {count, changeCounter};
};

export default useDocumentTitle;
