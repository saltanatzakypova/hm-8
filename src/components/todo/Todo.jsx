import React, { useState } from "react";
import AddTodo from "../add-todo/AddTodo";
import ErrorModule from "../error-module/ErrorModule";
import { TodoStyle } from "../styles/Styles";
import TodoList from "../todo-list/TodoList";

const Todo = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState();

  const [list, setList] = useState([
    { id: Math.random().toString(), title: "first title", status: true },
    { id: Math.random().toString(), title: "second title", status: false },
    { id: Math.random().toString(), title: "thirth title", status: true },
  ]);

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  const addDataArray = () => {
    if (value.trim().length === 0) {
      setError({
        title: "empty",
        message: "Enter message",
      });
      return;
    }
    let newArr = [...list];
    newArr.push({ id: Math.random().toString(), title: value, status: true });
    setList(newArr);
    setValue("");
  };

  const closeModal = () => {
    setError(null);
  };

  return (
    <TodoStyle>
      {!error ? "" : <ErrorModule closeModal={closeModal} {...error} />}
      <div>
        <AddTodo
          value={value}
          changeValue={changeValue}
          addDataArray={addDataArray}
        />
        <TodoList
          list={list}
          setList={setList}
          value={value}
          setValue={setValue}
        />
      </div>
    </TodoStyle>
  );
};

export default Todo;
