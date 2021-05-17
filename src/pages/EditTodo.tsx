import axios from "axios";
import React, { useEffect, useState } from "react";

interface ITodo {
  id: number;
  message: string;
  category: string[];
}

const EditTodo = (props: any) => {
  const todoId = props.match.params.id;
  const [selectedTodo, setSelectedTodo] = useState({} as ITodo);

  const getTodoById = async () => {
    const response = await axios.get(`http://localhost:4000/todos/${todoId}`);
    setSelectedTodo(response.data);
  };

  useEffect(() => {
    getTodoById();
  }, []);

  return (
    <div>
      <h3>Todo Edit Page. ID ===== {todoId}</h3>

      {selectedTodo && (
        <ul>
          <li>ID: {selectedTodo.id}</li>
          <li>Message: {selectedTodo.message}</li>
          <li>Categories: {selectedTodo.category}</li>
        </ul>
      )}
    </div>
  );
};

export default EditTodo;
