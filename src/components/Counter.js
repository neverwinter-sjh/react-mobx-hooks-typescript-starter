import React, { useState, useEffect } from 'react';
import { useObserver } from 'mobx-react';
import useStore from 'store/index';

const Counter = () => {
  const { store } = useStore();
  const [currentNum, setCurrentNum] = useState(store.number);

  const increase = () => {
    store.increase();
    // 이 시점에서 store.number는 이미 +1 되어 있음.
    setCurrentNum(store.number + 1);
    console.log('currentNum : ', currentNum);
  };

  useEffect(() => {
    console.log('currentNum : ', currentNum);
  }, [currentNum]);

  const decrease = () => {
    store.decrease();
    // 이 시점에서 store.number는 이미 -1 되어 있음.
    setCurrentNum(store.number - 1);
  };

  return useObserver(() => (
    <div>
      <h1>store.number : {store.number}</h1>
      <h1>useState.currentNum : {currentNum}</h1>
      <button type="button" onClick={increase}>
        +1
      </button>
      <button type="button" onClick={decrease}>
        -1
      </button>
    </div>
  ));
};

export default Counter;
