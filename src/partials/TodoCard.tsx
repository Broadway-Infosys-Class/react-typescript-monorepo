import React from "react";
import { Card } from "react-bootstrap";
import CategoryList from "./CategoryList";

const TodoCard = (props: any) => {
  console.log(props.todo);
  const todo = props.todo;
  return (
    <Card border="success" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Text>{todo.message}</Card.Text>
      </Card.Body>
      <CategoryList category={todo.category} />
    </Card>
  );
};

export default TodoCard;
