import React, { Component } from "react";
import "./TodoItem";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <>
        <h1>Hello From List</h1>
        <TodoItem />
      </>
    );
  }
}

export default TodoList;
