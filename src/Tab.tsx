import * as React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

import List from './List';

export default function Tab({ item, done, yet, setItem, setDone, setYet }) {
  const [tab, setTab] = useState('all');

  const tabHandler = (e) => {
    setTab(e.target.id);
  };
  return (
    <div>
      <Nav variant="tabs" fill defaultActiveKey="all">
        <Nav.Item>
          <Nav.Link eventKey="all" id="all" onClick={tabHandler}>
            全部
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="done" id="done" onClick={tabHandler}>
            已完成
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="yet" id="yet" onClick={tabHandler}>
            未完成
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <List
        tab={tab}
        item={item}
        done={done}
        yet={yet}
        setItem={setItem}
        setDone={setDone}
        setYet={setYet}
      />
    </div>
  );
}
