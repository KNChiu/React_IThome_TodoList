import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Card, Stack } from 'react-bootstrap';

export default function Item({
  content,
  id,
  setIsEdit,
  item,
  setItem,
  isDone = false,
}) {
  const deleteHandler = (e) => {
    e.preventDefault();
    const parent = e.target.parentElement.parentElement;

    const newItem = item.filter((element) => element.id !== parent.id);

    setItem(newItem);
  };

  const checkHandler = (e) => {
    let newItem = item.map((i) => {
      if (i.id === id) {
        if (e.target.checked) {
          i.isDone = true;
        } else {
          i.isDone = false;
        }
      }
      return i;
    });

    setItem(newItem);
  };

  return (
    <Card>
      <Form.Check
        type="checkbox"
        id={`check-${id}`}
        className="d-flex align-items-center"
      >
        <Form.Check.Input
          type="checkbox"
          className="m-0"
          onClick={checkHandler}
          checked={isDone}
        />
        <Form.Check.Label className="w-100">
          <Card.Body id={id} className="d-flex justify-content-between">
            <span className={isDone ? 'text-decoration-line-through' : ''}>
              {content}
            </span>
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
        </Form.Check.Label>
      </Form.Check>
    </Card>
  );
}
