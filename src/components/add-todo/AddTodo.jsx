import React from "react";
import { Input, Button, InputWithButton } from "../styles/Styles";

const AddTodo = ({ value, changeValue, addDataArray }) => {
    const addForKeyBoard = (e) => {
    if (e.key === 'Enter') {
       addDataArray();
    }
  };
  return (
    <InputWithButton>
      <Input type="text" value={value} onChange={changeValue} onKeyPress={addForKeyBoard} />
      <Button onClick={() => addDataArray()} onKeyPress={addForKeyBoard}>Add</Button>
    </InputWithButton>
  );
};

export default AddTodo;
