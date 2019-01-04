import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'; //These functions make our components observable and be able to use the store
import TodoList from '../components/TodoList';
import Form from '../components/Form';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  
  render() {
  const { store } = this.props;
        
    return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div>
              <h3 className="subtitle">Make a new To do</h3>
              <Form store={store}/>
          </div>
          <div className="card-container">
              {store.Todo.map((todo, i) => (
                    <TodoList todo={todo} key={i}/>))}
          </div>
      </div>
    );
  }
}

export default inject('store')(observer (App));
