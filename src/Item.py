const Item = ({ content, id, setIsEdit, item, setItem }) => {
  const [isDone, setIsDone] = useState(false);

  const checkHandler = (e) => {
    if (e.target.checked) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    const parent = e.target.parentElement.parentElement;

    const newItem = item.filter((element) => element.id !== parent.id);

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
};
