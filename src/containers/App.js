import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TodosList from '../components/TodosList';
import TabsView from '../components/TabsView';
import Form from '../components/Form';
import ModalEditTodo from '../components/ModalEditTodo';
import BookmarkList from '../components/BookmarkList';
import FormMarker from '../components/FormMarker';
import '../App.css';

class App extends Component {

  handleRemove = todo => () => {
    const { store } = this.props;
    store.remove(todo);
  }

  markActive = (id) => () => {
    const { store } = this.props;
    store.showTab(id);
  }

  render() {
  const { store } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h3 className="subtitle">Make a new To do</h3>
          <button className="btn" onClick={store.toggleShowForm}>
            +
          </button>
        </header>
        <div className="mark-container">
          <FormMarker />
          <BookmarkList/>
        </div>
        <div>
          {
            store.showFormCreateTodo &&
            <Form />
          }
          <TabsView 
            tabs={store.Tab} 
            markActive={this.markActive}
            todoLengthByIdTab={store.todoLengthByIdTab}
          />
        </div>
        <div className="card-container">
          <TodosList 
            activeTodoByTab={store.activeTodoByTab} 
            handleRemove={this.handleRemove}
            selectTodo={store.selectTodo}
          />
        </div>
        {
          store.selectedTodo &&
          <ModalEditTodo />
        }
      </div>
    );
  }
}

export default inject('store')(observer (App));
