import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'; //These functions make our components observable and be able to use the store
import TodoList from '../components/TodoList';
import Form from '../components/Form';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  
  render() {
    const { store } = this.props;
    const doneLengtn = store.Todo.filter(todo => todo.is_done === true).length;
    const notDoneLengtn = store.Todo.length - doneLengtn;
    return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div>
              <h3 className="subtitle">Make a new To do</h3>
              <Form store={store}/>
              <span>{`выполненных: ${doneLengtn}`}</span>
              <span>{`Не выполненных: ${notDoneLengtn}`}</span>
          </div>
          <div className="card-container">
              {store.Todo.map((todo, i) => (
                    <TodoList todo={todo} key={i} store={store} />))}
          </div>
      </div>
    );
  }
}

export default inject('store')(observer (App));
