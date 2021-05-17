import React from "react";
import { Button, Card } from "react-bootstrap";
import CategoryList from "./CategoryList";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router";

const useStyles = createUseStyles({
  actionWrapper: {
    display: "flex",
    margin: "10px 0",
    justifyContent: "space-around",
  },
});

const TodoCard = (props: any) => {
  const classes = useStyles();
  const history = useHistory();
  console.log(props.todo);
  const todo = props.todo;
  return (
    <Card border="success" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Text>{todo.message}</Card.Text>
      </Card.Body>
      <CategoryList category={todo.category} />
      <div className={classes.actionWrapper}>
        <Button
          onClick={() => {
            history.push(`/todo/edit/${todo.id}`);
          }}
          variant="primary"
        >
          EDIT
        </Button>
        <Button variant="danger">DELETE</Button>
      </div>
    </Card>
  );
};

export default TodoCard;
