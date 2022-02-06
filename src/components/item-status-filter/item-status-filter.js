import React, { Component } from 'react';
import AddDo from './addDo/add-do';

import './item-status-filter.css';
export default class ItemStatusFilter extends Component {

  render() {
    const { onAdd } = this.props;

    return (
      <div className="btn-group">
        <button type="button" className="btn btn-info">
          All
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Active
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Done
        </button>
        <AddDo
        onAdd={onAdd}
        />
      </div>
    );
  }
}
