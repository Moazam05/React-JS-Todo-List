import React, { Component } from "react";
import uuid from "uuid/v4";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

// showing vs-code github setup

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "Wake Up"
      },
      {
        id: 2,
        title: "Make BreakFast"
      }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = (e) => {
    console.log("Handle Change");
  };
  handleSubmit = (e) => {
    console.log("Handle Submit");
  };
  clearList = () => {
    console.log("Clear List");
  };
  handlDelete = (id) => {
    console.log(`Handle Delete ${id}`);
  };
  handlEdit = (id) => {
    console.log(`Handle Edit ${id}`);
  };
  render() {
    console.log(this.state);

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handlDelete={this.handlDelete}
              handlEdit={this.handlEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
