import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react';
import useStore from 'store/index';
import axios from 'axios';

const App = () => {
  const { store } = useStore();

  useEffect(() => {
    console.log(store.object);
  }, [store.object]);

  const getData = async () => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    store.setObject(result.data);
    return result;
  };

  useEffect(() => {
    const data = getData();
  }, []);

  const getData2 = async () => {
    const result = getData();
  };

  return useObserver(() => (
    <div>
      <button type="button"
        onClick={getData2}
      >
        Get Data
      </button>
      <p>{JSON.stringify(store.object, null, 2)}</p>
    </div>
  ));
};

export default App;
