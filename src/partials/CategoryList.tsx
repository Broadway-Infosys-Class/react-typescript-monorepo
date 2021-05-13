import React from "react";

const CategoryList = (props: any) => {
  const categories = props.category;
  return (
    <ul>
      {categories.map((cat: any, index: number) => (
        <li key={index}>{cat}</li>
      ))}
    </ul>
  );
};

export default CategoryList;
