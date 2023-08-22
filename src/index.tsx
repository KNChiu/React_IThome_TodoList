import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Input = ({ input, setInput, item, setItem }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const clickHandler = (e) => {
    setItem([...item, input]);
  };
  return (
    <div>
      <input type="text" onChange={inputHandler} />
      <button onClick={clickHandler}>新增</button>
    </div>
  );
};

const List = ({ item }) => {
  // 取出item這個props，使用map
  const list = item.map((i) => {
    const id = uuidv4();
    console.log(id);
    return <li key={id}>{i}</li>;
  });
  return <ul>{list}</ul>;
};

const App = () => {
  const [input, setInput] = useState('');
  const [item, setItem] = useState([]);

  return (
    <>
      <Input input={input} setInput={setInput} item={item} setItem={setItem} />
      <List item={item} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
  </div>
);
