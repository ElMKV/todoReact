import React, { Component } from "react";

export default class AddDo extends Component {
  render() {
    const { onAdd } = this.props;
    return (
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={onAdd}
        >
          <i
            className="fa fa-plus"
          ></i>
        </button>
    );
  }
}
