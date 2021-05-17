import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router";
import TodoCard from "../partials/TodoCard";

const useStyles = createUseStyles({
  mainWrapper: {
    display: "flex",
    "& .card": {
      margin: 10,
    },
  },
  addButtonWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    width: "fit-content",
  },
});

interface ITodo {
  id: number;
  message: string;
  category: string[];
}

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const [todos, setTodos] = useState([] as ITodo[]);

  const getAllTodos = async () => {
    let response = await axios.get("http://localhost:4000/todos");
    console.log(response.data);
    setTodos(response.data);
  };

  useEffect(() => {
    getAllTodos();
    return () => {
      console.log("dasojdklasjd");
    };
  }, []);

  return (
    <div className={classes.mainWrapper}>
      {todos.map((todo, index) => (
        <TodoCard key={index} todo={todo} />
      ))}
      <Card
        className={classes.addButtonWrapper}
        border="success"
        style={{ width: "18rem" }}
      >
        <Button
          className={classes.addButton}
          variant="success"
          onClick={() => {
            history.push("/todo/add");
          }}
        >
          Add Todo
        </Button>
      </Card>
    </div>
  );
};

export default Home;
