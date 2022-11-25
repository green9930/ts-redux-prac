import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../context/modules/todo";
import { RootState } from "../context/redux";

const TodoApp = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onAddTodo = (text: string) => dispatch(addTodo(text));
  const onToggleTodo = (id: number) => dispatch(toggleTodo(id));
  const onRemoveTodo = (id: number) => dispatch(removeTodo(id));

  return <></>;
};

export default TodoApp;
