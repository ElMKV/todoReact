import React, { Component } from "react";

export default class Form extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        className="input-group mb-3"
      >
        <input
          type="text"
          name="task"
          value={this.state.label}
          onChange={this.onLabelChange}
          className="form-control"
          placeholder="Make awesome app"
          aria-label="Сварить кофе"
          aria-describedby="Make awesome app"
        ></input>
        <button className="btn btn-outline-success ml-2">Add Item</button>
      </form>
    );
  }
}
