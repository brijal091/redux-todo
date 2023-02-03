import React, { useState } from "react";
import "./Home.css";
import { addTodo } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Todos from "./Todos";
import { updateTodo } from "../redux/actions";

function Home() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const [icon, setIcon] = useState(true);
  const [todoId, setTodoId] = useState(0);
  const list = useSelector((state) => state.todoReducer.list);
  const getTodoId = (id) => {
    setTodoId(id);
  };
  const editTodoHandler = (val) => {
    setTodo(val);
  };
  const onClickHandler = () => {
    dispatch(addTodo(todo));
    setTodo("");
  };
  const onChangeHandler = (e) => {
    setTodo(e.target.value);
  };
  const toggleIcon = () => setIcon(false);

  const onEditHandler = () => {
    dispatch(updateTodo(todoId, todo));
    setTodo("");
  };
  return (
    <>
      <div className="container">
        <div className="box">
          <h2>Add Todo</h2>
          <input
            type="text"
            placeholder="Add Todo"
            value={todo}
            name="todo"
            onChange={onChangeHandler}
          />

          <button className="btn button">
            {icon === true ? (
              <i
                className="fa-solid fa-plus add-icon"
                onClick={() => onClickHandler()}
              ></i>
            ) : (
              <i
                className="fa-solid fa-pen add-icon"
                onClick={() => onEditHandler()}
              ></i>
            )}
          </button>
        </div>

        <div className="todos-box">
          <h2>YOUR TODOS</h2>
          <hr />
          {list.map((item) => {
            return (
              <Todos
                item={item}
                key={item.id}
                edit={editTodoHandler}
                todo={todo}
                toggleIcon={toggleIcon}
                getId={getTodoId}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
