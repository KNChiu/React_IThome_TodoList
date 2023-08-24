import * as React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import Input from './Input';
import Tab from './Tab';

export default function App() {
  const [input, setInput] = useState('');
  const [item, setItem] = useState([]);
  const [done, setDone] = useState([]);
  const [yet, setYet] = useState([]);

  useEffect(() => {
    // 若項目長度不為0，處理項目
    if (item.length !== 0) {
      const newDone = item.filter((i) => i.isDone === true);
      const newYet = item.filter((i) => i.isDone === false);

      setDone(newDone);
      setYet(newYet);
    } else {
      // 若長度為0，則將done、yet設為空Array
      setDone([]);
      setYet([]);
    }
  }, [item]);

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
              <Tab
                item={item}
                done={done}
                yet={yet}
                setItem={setItem}
                setDone={setDone}
                setYet={setYet}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
