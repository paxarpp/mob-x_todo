import React, { Component } from 'react';
import { inject } from 'mobx-react';

class Form extends Component {

  onSubmit = e => {
    e.preventDefault();
    const { store } = this.props;
    store.add({
      name: this.nameInput.value,
      details: this.detailsInput.value,
    });
    store.toggleShowForm();
  };

  render() {
    const { store } = this.props;
    return(
      <form onSubmit={this.onSubmit} className='create'>
        <label  htmlFor="name">
          Сделать
          <input
            required
            className="input"
            type="text"
            ref={input => (this.nameInput = input)}
            id="name"
          />
        </label>
        <label  htmlFor="details">
          Подробнее
          <input
            required
            className="input"
            type="text"
            ref={input => (this.detailsInput = input)}
            id="details"
          />
        </label>
        <button 
          className="btn" 
          type="submit">
          Add
        </button>
        <span className="close_form" onClick={store.toggleShowForm}>
          {String.fromCharCode(10008)}
        </span>
      </form>
    );
  };
}

export default inject('store')(Form);
