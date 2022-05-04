import React from "react";
import "./ToDo.css";
const ToDo = ({ todo }) => {
  return <div className="todo">{todo.task}</div>;
};

export default ToDo;
