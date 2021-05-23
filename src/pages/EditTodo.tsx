import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router";

interface ITodo {
  id: number;
  message: string;
  category: string[];
}

const useStyles = createUseStyles({
  mainWrapper: {
    maxWidth: 500,
    margin: "59px auto",
    padding: 20,
    border: "1px solid grey",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  categoryList: {},
});

const EditTodo = (props: any) => {
  const classes = useStyles();
  const history = useHistory();
  const todoId = props.match.params.id;
  const [selectedTodo, setSelectedTodo] = useState({} as ITodo);
  const [message, setMessage] = useState("" as string);
  const [categoriesList, setCategoriesList] = useState([] as string[]);
  const [category, setCategory] = useState("" as string);

  const getTodoById = async () => {
    const response = await axios.get(`http://localhost:4000/todos/${todoId}`);
    setSelectedTodo(response.data);
    setMessage(selectedTodo.message);
    console.log(message);
    setCategoriesList(selectedTodo.category);
  };

  const handleMessageChange = (event: any) => {
    event.persist();
    setMessage(event.target.value);
  };

  const handleCategoryChange = (event: any) => {
    event.persist();
    setCategory(event.target.value);
  };

  const addToCategory = (event: any) => {
    event.persist();
    // categoriesList.push(catodo/edit/1tegory);
    // let newCatList = categoriesList;

    setCategoriesList([...categoriesList, category]);

    // setCategoriesList([...categoriesList, work])

    // newCatList.push(category);
    // setCategoriesList(newCatList);
    // console.log(categoriesList);
  };

  const deleteCategory = (position: number) => {
    console.log(position);
    let catList = selectedTodo.category;
    catList.splice(position, 1);
    setSelectedTodo({ ...selectedTodo, category: [...catList] });
  };

  const handleSubmit = async () => {
    let myObj = {
      message: message,
      category: selectedTodo.category,
    };
    const response = await axios.patch(
      `http://localhost:4000/todos/${todoId}`,
      myObj
    );
    history.push("/");
  };

  useEffect(() => {
    if (!message) {
      getTodoById();
    }
  }, []);

  return (
    <div>
      <h3>Todo Edit Page. ID ===== {todoId}</h3>
      <ul>
        <li>ID: {selectedTodo.id}</li>
        <li>Message: {selectedTodo.message}</li>
        <li>Categories: {selectedTodo.category}</li>
      </ul>
      {selectedTodo && (
        <div className={classes.mainWrapper}>
          <Form.Group controlId="formBasicMessage">
            <Form.Label>Todo Message</Form.Label>
            <Form.Control
              value={message}
              onChange={handleMessageChange}
              name="message"
              type="text"
              placeholder="Enter Message"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control
              onChange={handleCategoryChange}
              name="cat"
              type="text"
              placeholder="Enter Category"
              value={category}
            />
            <Button onClick={addToCategory} variant="secondary">
              Add Category
            </Button>
            {console.log(categoriesList)}
            {selectedTodo.category && (
              <ul className={classes.categoryList}>
                {selectedTodo.category.map((cat, index) => (
                  <>
                    <li>{cat}</li>
                    <Button
                      onClick={() => deleteCategory(index)}
                      variant="danger"
                    >
                      X
                    </Button>
                  </>
                ))}
              </ul>
            )}
          </Form.Group>

          <Button onClick={handleSubmit} variant="primary">
            Edit
          </Button>
        </div>
      )}
    </div>
  );
};

export default EditTodo;
