import * as React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Card,
  Stack,
} from 'react-bootstrap';

const Input = ({ input, setInput, item, setItem }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const clickHandler = (e) => {
    setItem([...item, { content: input, id: uuidv4() }]);
    setInput('');
  };
  return (
    <InputGroup className="mb-3">
      <Form.Control type="text" onChange={inputHandler} value={input} />
      <Button onClick={clickHandler}>新增</Button>
    </InputGroup>
  );
};

const List = ({ item, setItem }) => {
  const [isEdit, setIsEdit] = useState('');
  const [input, setInput] = useState('');
  const [newInput, setNewInput] = useState('');

  const deleteHandler = (e) => {
    e.preventDefault();
    const parent = e.target.parentElement.parentElement;

    const newItem = item.filter((element) => element.id !== parent.id);

    setItem(newItem);
  };

  const editedHandler = (e) => {
    const newItem = item.map((i) => {
      const { id, content } = i;
      if (id === isEdit) {
        i.content = newInput;
        return i;
      }
      return i;
    });
    setIsEdit('');
    setItem(newItem);
  };

  const list = item.map((i, index) => {
    const { content, id } = i;
    return (
      <div key={id}>
        {!(isEdit === id) ? (
          <Card>
            <Card.Body id={id} className="d-flex justify-content-between">
              {content}
              <Stack direction="horizontal" gap={3}>
                <Card.Link
                  href="#"
                  onClick={() => {
                    setIsEdit(id);
                  }}
                >
                  edit
                </Card.Link>
                <Card.Link href="#" onClick={deleteHandler}>
                  delete
                </Card.Link>
              </Stack>
            </Card.Body>
          </Card>
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
};

export default function App() {
  const [input, setInput] = useState('');
  const [item, setItem] = useState([]);

  return (
    <>
      <Container>
        <Row>
          <Col xs="5" className="mx-auto">
            <div className="py-3">
              {/*新增一個h1標題*/}
              <h1 className="text-center">Todo List</h1>
              <Input
                input={input}
                setInput={setInput}
                item={item}
                setItem={setItem}
              />
              <List item={item} setItem={setItem} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
