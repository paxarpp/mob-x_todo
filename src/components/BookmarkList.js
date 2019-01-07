import React, { Component } from 'react';
import { observer } from 'mobx-react';
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
                    store.Bookmarks.map((item, index) => (
                        <li key={index}>
                            <BookmarkItem bookmark={item} handleRemove={this.handleRemove} />
                        </li>
                    ))
                }
            </ul>
            </>
        );
    }
}  

export default observer(BookmarkList);