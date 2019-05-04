import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TodoCard from '../components/TodoCard';
import Tab from '../components/Tab';
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
          {
            store.Tab.map((tab, i) => (
              <Tab 
                tab={tab} 
                key={`${i}-${tab.title}`} 
                markActive={this.markActive}
                todoLengthByIdTab={store.todoLengthByIdTab} />
            ))
          }
        </div>
        <div className="card-container">
          {
            store.activeTodoByTab.map((todo, i) => (
              <TodoCard 
                todo={todo} 
                key={i}
                handleRemove={this.handleRemove}
                selectTodo={store.selectTodo} />
            ))
          }
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
