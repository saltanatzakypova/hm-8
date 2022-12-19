import React, { useState } from "react";
import { BiFont, BiRename, BiText, BiTrashAlt } from "react-icons/bi";
import { List, Title } from "../styles/Styles";

const TodoList = ({ list, setList }) => {
  const [edit, setEdit] = useState();
  const [value, setValue] = useState("");



  const deleteHandler = (id) => {
    let newTodo = [...list].filter((item) => item.id !== id);
    setList(newTodo);
  };

  const completedHadler = (id) => {
    let newTodo = [...list].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setList(newTodo);
  };

  const saveTitle = (id) => {
    let newTodo = [...list].filter((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setList(newTodo);
    setEdit(null);
  };

  const changeTitle = (id, title) => {
    setEdit(id);
    setValue(title);
  };

  return (
    <div>
      {list.map((item) => (
        <List key={item.id}>
          {edit === item.id ? (
            <div>
              <saveInput
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          ) : (
            <Title className={item.status}>{item.title}</Title>
          )}

          {edit === item.id ? (
            <div>
              <button onClick={() => saveTitle(item.id)}>save</button>
            </div>
          ) : (
            <div className="btns">
              <button onClick={() => deleteHandler(item.id)}>
                <BiTrashAlt />
              </button>
              <button onClick={() => completedHadler(item.id)}>
                {item.status ? <BiText /> : <BiFont />}
              </button>
              <button onClick={() => changeTitle(item.id, item.title)}>
                <BiRename />
              </button>
            </div>
          )}
        </List>
      ))}
    </div>
  );
};

export default TodoList;
