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
} from 'react-bootstrap';

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
    <InputGroup className="mb-3">
      <Form.Control type="text" onChange={inputHandler} value={input} />
      <Button onClick={clickHandler}>新增</Button>
    </InputGroup>
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

  const list = item.map((i, index) => {
    const { input, id } = i;
    return (
      <div key={id}>
        <Card>
          {/*把id改放入這裡，方便deleteHandler取值*/}
          <Card.Body id={id} className="d-flex justify-content-between">
            {input}
            <Card.Link
              href="#"
              style={{ marginLeft: '1.5rem' }}
              onClick={deleteHandler}
            >
              delete
            </Card.Link>
          </Card.Body>
        </Card>
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
