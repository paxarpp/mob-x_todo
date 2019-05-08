import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { CREATE_TODO } from './constants';

class Form extends Component {

  onSubmit = e => {
    e.preventDefault();
    const { store } = this.props;
    store.add({
      name: this.nameInput.value,
      details: this.detailsInput.value,
    });
    store.closeModal();
  };

  render() {
    const { store } = this.props;
    return(
      store.showModal === CREATE_TODO &&
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
        <span className="close_form" onClick={store.closeModal}>
          {String.fromCharCode(10008)}
        </span>
      </form>
    );
  };
}

export default inject('store')(observer(Form));
