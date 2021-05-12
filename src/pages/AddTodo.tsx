import React, { useState } from "react";

const AddTodo = () => {
  const [categories, setCategories] = useState([] as string[]);
  const [cat, setCat] = useState("" as string);

  const handleCategoryChange = (event: any) => {
    console.log(event.target.value);
    setCat(event.target.value);
  };

  const addToCategory = () => {
    let tempArray = categories;
    tempArray.push(cat);
    setCategories(tempArray);

    console.log(categories);
  };
  return (
    <div>
      <input type="text" name="message" id="message" />
      <input
        onChange={handleCategoryChange}
        type="text"
        name="category"
        id="category"
        defaultValue={cat}
      />
      <button onClick={addToCategory}>Add New Category</button>

      <div>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddTodo;
