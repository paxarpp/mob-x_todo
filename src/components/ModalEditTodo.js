import React, { Component } from 'react';
import SelectedMarkerView from './SelectedMarkerView';
import MarkerView from './MarkerView';
import { observer, inject } from 'mobx-react';

const stopPropagation = (e) => e.stopPropagation();
class ModalEditTodo extends Component {

  onSubmit = e => {
    stopPropagation(e);
    const { store } = this.props;
    const name = this.nameInput.value;
    const details = this.detailsInput.value;
    store.update({
      ...store.selectedTodo,
      name: name.trim() === '' ? store.selectedTodo.name : name,
      details: details.trim() === '' ? store.selectedTodo.details : details,
    });
    store.selectTodo(undefined);
  };

  handleAdd = (mark) => (e) => {
    const {store} = this.props;
    stopPropagation(e);
    store.selectedTodo.addBookmarkInTodo({...mark});
  }

  handleRemove = (mark) => (e) => {
    const {store} = this.props;
    stopPropagation(e);
    store.selectedTodo.removeBookmarkInTodo(mark);
  }

  onClose = () => {
    const { store } = this.props;
    store.selectTodo(undefined);
  }

  render() {
    const {store} = this.props;
    if (!store.selectedTodo) {
      return null;
    }
    return(
      <div className="modal" onClick={this.onClose}>
        <div className={'form edit'} onClick={stopPropagation}>
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
          <div className="marker_row">
          <div className="marker_block">
            <SelectedMarkerView bookmarks={store.selectedTodo.bookmarks} handleRemove={this.handleRemove} />
          </div>
          <div>
            <button 
              className="btn" 
              onClick={this.onSubmit}
            >
              Edit
            </button>
          </div>
          <div className="marker_block">
            <MarkerView bookmarks={store.selectedTodo.bookmarks} handleAdd={this.handleAdd} Bookmarks={store.Bookmarks}/>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default inject('store')(observer(ModalEditTodo));
