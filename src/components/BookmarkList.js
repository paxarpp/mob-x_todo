import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import BookmarkItem from './BookmarkItem';

class BookmarkList extends Component {

  onSubmit = e => {
    e.preventDefault();
    const { store } = this.props;
    store.addBookmark({
      title: this.nameInput.value,
    });
    e.target.reset();
    this.nameInput.focus();
  };

  handleRemove = (mark) => () => {
    const { store } = this.props;
    store.removeBookmark(mark);
  }

  changeSelectedBookmark = (id) => () => {
    const { store } = this.props;
    store.toggleSelectedBookmark(id);
  }

  render() {
    const {store} = this.props;
    return  (
      <>
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
          type="submit">
          Add
        </button>
      </form>
      <ul>
        {
          store.Bookmarks.map((mark, index) => (
            <li key={index} className="boorkmark-list-item">
              <BookmarkItem bookmark={mark} handleRemove={this.handleRemove} />
              <input type="checkbox" onChange={this.changeSelectedBookmark(mark.id)} />
            </li>
          ))
        }
      </ul>
      </>
    );
  }
}  

export default inject('store')(observer(BookmarkList));