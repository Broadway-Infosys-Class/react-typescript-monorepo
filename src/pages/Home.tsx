import axios from "axios";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router";

const useStyles = createUseStyles({
  mainWrapper: {
    height: "77vh",
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
      <h1>Welcome to home page</h1>

      {todos.map((todo) => (
        <h3 key={todo.id}>
          {" "}
          {todo.message}---- {todo.category.toString()}
        </h3>
      ))}

      <button
        onClick={() => {
          history.push("/todo/add");
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default Home;
