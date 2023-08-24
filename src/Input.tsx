import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, Form } from 'react-bootstrap';

export default function Input({ input, setInput, item, setItem }) {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const clickHandler = (e) => {
    setItem([...item, { content: input, id: uuidv4(), isDone: false }]);
    setInput('');
  };
  return (
    <InputGroup className="mb-3">
      <Form.Control type="text" onChange={inputHandler} value={input} />
      <Button onClick={clickHandler}>新增</Button>
    </InputGroup>
  );
}
