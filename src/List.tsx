import * as React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, Form } from 'react-bootstrap';
import Item from './Item';

export default function List({
  tab = 'all',
  item,
  setItem,
  done,
  setDone,
  yet,
  setYet,
}) {
  const [isEdit, setIsEdit] = useState('');
  const [input, setInput] = useState('');
  const [newInput, setNewInput] = useState('');

  const editedHandler = (e) => {
    const newItem = item.map((i) => {
      const { id, content } = i;
      if (id === isEdit && newInput) {
        i.content = newInput;
        return i;
      }
      return i;
    });
    setIsEdit('');
    setNewInput('');
    setItem(newItem);
  };

  let itemList;
  if (tab === 'all') {
    itemList = item;
  } else if (tab === 'done') {
    itemList = done;
  } else if (tab === 'yet') {
    itemList = yet;
  }

  const list = itemList.map((i, index) => {
    const { content, id, isDone } = i;
    return (
      <div key={id}>
        {!(isEdit === id) ? (
          <Item
            content={content}
            id={id}
            setIsEdit={setIsEdit}
            item={item}
            setItem={setItem}
            done={done}
            setDone={setDone}
            yet={yet}
            setYet={setYet}
            isDone={isDone}
          />
        ) : (
          <InputGroup className="my-3">
            <Form.Control
              type="text"
              onChange={(e) => {
                setNewInput(e.target.value);
              }}
              defaultValue={content}
            />
            <Button onClick={editedHandler}>提交</Button>
          </InputGroup>
        )}
      </div>
    );
  });
  return <div>{list}</div>;
}
