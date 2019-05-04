import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

class FormMarker extends Component {

  onSubmit = e => {
    e.preventDefault();
    const { store } = this.props;
    store.addBookmark({
      title: this.nameInput.value,
    });
    e.target.reset();
    this.nameInput.focus();
  };

  render() {
    return  (
      <form onSubmit={this.onSubmit}>
        <label  htmlFor="title">
          маркер
          <input
            required
            className="input"
            type="text"
            ref={input => (this.nameInput = input)}
            id="title"
          />
        </label>
        <button 
          className="btn" 
          type="submit"
        >
          Add
        </button>
      </form>
    );
  }
}  

export default inject('store')(observer(FormMarker));