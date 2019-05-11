import React, { Component } from 'react';
import BookmarkItem from '../components/BookmarkItem';
import { observer, inject } from 'mobx-react';

class ModalEditTodo extends Component {

  onSubmit = e => {
    e.preventDefault();
    const {
      store
    } = this.props;
    const name = this.nameInput.value;
    const details = this.detailsInput.value;
    store.update({
      ...store.selectedTodo,
      name: name.trim() === '' ? store.selectedTodo.name : name,
      details: details.trim() === '' ? store.selectedTodo.details : details,
    });
    store.selectTodo(undefined);
  };

  handleAdd = (mark) => () => {
    const {store} = this.props;
    store.selectedTodo.addBookmarkInTodo({...mark});
  }

  handleRemove = (mark) => () => {
    const {store} = this.props;
    store.selectedTodo.removeBookmarkInTodo(mark);
  }

  render() {
    const {store} = this.props;
    if (!store.selectedTodo) {
      return null;
    }
    return(
      <div className="modal">
        <form onSubmit={this.onSubmit}>
          <input
            className="input"
            type="text"
            ref={input => (this.nameInput = input)}
            defaultValue={store.selectedTodo.name}
          />
          <input
            className="input"
            type="text"
            ref={input => (this.detailsInput = input)}
            defaultValue={store.selectedTodo.details}
          />
          {
            store.selectedTodo.bookmarks.map(item => (
              <BookmarkItem
                disabled
                handleRemove={this.handleRemove}
                bookmark={item}
                key={item.id}
              />
            ))
          }
          <button 
            className="btn" 
            type="submit"
          >
            Edit
          </button>
          {
            store.Bookmarks.map(item => (
              <BookmarkItem
                bookmark={item}
                key={item.id}        
                handleAdd={this.handleAdd}
                disabled={store.selectedTodo.bookmarks.find((self) => self.id === item.id)}
              />
            ))
          }
        </form>
      </div>
    );
  }
}

export default inject('store')(observer(ModalEditTodo));
