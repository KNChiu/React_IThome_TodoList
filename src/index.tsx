import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Input = ({ input, setInput, item, setItem }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const clickHandler = (e) => {
    // 新增id，以object形式更新至state
    setItem([...item, { input, id: uuidv4() }]);
    setInput('');
  };

  return (
    <div>
      <input type="text" onChange={inputHandler} value={input} />
      <button onClick={clickHandler}>新增</button>
    </div>
  );
};

const List = ({ item, setItem }) => {
  const deleteHandler = (e) => {
    e.preventDefault();
    // 選取li標籤
    const li = e.target.parentElement;
    // filter
    const newItem = item.filter((element) => element.id !== li.id);
    //更新state
    setItem(newItem);
  };

  const list = item.map((i) => {
    const { id, input } = i;
    return (
      <li key={id} id={id}>
        <span>{input}</span>
        <a href="" style={{ marginLeft: '1.5rem' }} onClick={deleteHandler}>
          delete
        </a>
      </li>
    );
  });
  return <ul>{list}</ul>;
};

const App = () => {
  const [input, setInput] = useState('');
  const [item, setItem] = useState([]);

  return (
    <>
      <Input input={input} setInput={setInput} item={item} setItem={setItem} />
      <List item={item} setItem={setItem} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
  </div>
);
