import React, { useState, useEffect } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import Form from "./components/Form";
import store from 'store';
import { v4 as uuidv4 } from 'uuid';

function App() {
  var storedList = JSON.parse(localStorage.getItem('ToDoList')) || [];
  console.log(storedList);
  const [toDoList, setToDoList] = useState(storedList);

  const addTask = (userInput) => {
    let copy = [...toDoList];
    let userId = store.get("userId");
    if (!userId) {
      userId = uuidv4();
      store.set("userId", userId);
    }

    copy = [
      ...copy,
      { id: userId, task: userInput },
    ];
    setToDoList(copy);
    console.log(copy);
  };
  useEffect(() => {
    localStorage.setItem("ToDoList", JSON.stringify(toDoList));
  }, [toDoList]);
  
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoList toDoList={toDoList} />
      <Form addTask={addTask} />
    </div>
  );
}

export default App;
