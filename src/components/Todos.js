import React, { useState } from "react";
import "./Todo.css";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";

function Todos(props) {
  const [work, setWork] = useState(false);
  const dispatch = useDispatch();
  const markDoneHandle = () => {
    setWork(true);
  };
  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const onEdit = (item) => {
    props.edit(item.data);
    props.toggleIcon();
    props.getId(item.id);
  };

  return (
    <>
      <div className="todo-box">
        <div
          className="todo-title"
          style={work === true ? { textDecoration: "line-through" } : {}}
        >
          {props.item.data}
        </div>
        <div className="icons">
          <i
            className="fas fa-edit f-icon"
            onClick={() => {
              onEdit(props.item);
            }}
          ></i>
          <i
            className="fa-solid fa-trash f-icon"
            onClick={() => {
              onDelete(props.item.id);
            }}
          ></i>
          <i
            className="fa-solid fa-check f-icon"
            onClick={() => markDoneHandle(props.item)}
          ></i>
        </div>
      </div>
    </>
  );
}

export default Todos;
