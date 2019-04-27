import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import BookmarkItem from './BookmarkItem';

class BookmarkList extends Component {

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
    return (
      <ul>
        {
          store.Bookmarks.map((mark, index) => (
          <li key={index} className="boorkmark-list-item">
            <BookmarkItem bookmark={mark} handleRemove={this.handleRemove} />
            <input type="checkbox" onChange={this.changeSelectedBookmark(mark.id)} />
          </li>))
        }
      </ul>
    );
  }
}  

export default inject('store')(observer(BookmarkList));