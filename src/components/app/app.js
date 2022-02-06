import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";
import Form from "../Form/Form";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [],
    isVisible: false,
    task: "",
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  };

  onAdd = () => {
    this.setState(({ isVisible }) => {
      return {
        isVisible: !isVisible,
      };
    });
  };

  onSave = (task) => {
    const newItem = this.createTodoItem(task);
    this.setState(({ todoData }) => {
      const newArr = [newItem, ...todoData];

      return {
        todoData: newArr,
      };
    });
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, important: !oldItem.important };
      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];
      return {
        todoData: newArray,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];
      return {
        todoData: newArray,
      };
    });
  };

  render() {
    const { todoData, isVisible} = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const toDoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount} />

        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter onAdd={this.onAdd} />
        </div>
        <div>{isVisible ? <Form onItemAdded={this.onSave} /> : null}</div>

        {todoData.length !== 0 ? (
          <TodoList
            todos={todoData}
            onDeleted={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
          />
        ) : (
          <div className="alert alert-primary" role="alert">
            Nothing to do
          </div>
        )}
      </div>
    );
  }
}
