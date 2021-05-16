import axios from "axios";
import React, { Children, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router";

interface ITodo {
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
});

const AddTodo = () => {
  const classes = useStyles();
  const history = useHistory();
  const [categories, setCategories] = useState([] as string[]);
  const [cat, setCat] = useState("" as string);
  const [message, setMessage] = useState("" as string);

  const handleCategoryChange = (event: any) => {
    event.persist();
    console.log("value in category Input: ", event.target.value);
    setCat(event.target.value);
  };

  const addToCategory = (event: any) => {
    event.persist();
    let tempArray = categories;
    tempArray.push(cat);
    setCategories(tempArray);
    setCat("");

    console.log("List of categories: ", categories);
  };

  const handleMessageChange = (event: any) => {
    event.persist();
    setMessage(event.target.value);
  };

  const handleSubmit = async () => {
    let todoObj: ITodo = {
      message: message,
      category: categories,
    };
    let response = await axios.post("http://localhost:4000/todos", todoObj);
    history.push("/");
  };
  return (
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

      <Form.Group controlId="formBasicCat">
        <Form.Label>Category</Form.Label>
        <Form.Control
          onChange={handleCategoryChange}
          name="cat"
          type="text"
          placeholder="Enter Category"
          value={cat}
        />
      </Form.Group>
      <ul>
        {categories.map((category) => (
          <li>{category}</li>
        ))}
      </ul>
      <Button onClick={addToCategory} variant="secondary">
        Add Category
      </Button>

      <div className={classes.buttonWrapper}>
        <Button onClick={handleSubmit} variant="primary">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AddTodo;
