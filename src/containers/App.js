import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'; //These functions make our components observable and be able to use the store
import TodoCard from '../components/TodoCard';
import Form from '../components/Form';
import '../App.css';

class App extends Component {

    handleRemove = todo => () => {
        const { store } = this.props;
        store.remove(todo);
    }

    showAll = () => {
        const { store } = this.props;
        store.showAll();
    }

    showDone = () => {
        const { store } = this.props;
        store.showDone();
    }

    showUndone = () => {
        const { store } = this.props;
        store.showUndone();
    }
  
    render() {
    const { store } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <h3 className="subtitle">Make a new To do</h3>
                </header>
                <div>
                    <Form store={store}/>
                    <span className="tab" onClick={this.showAll}>все</span>
                    <span className="tab" onClick={this.showDone}>выполненные</span>
                    <span className="tab" onClick={this.showUndone}>Не выполненные</span>
                </div>
                <div className="card-container">
                    {store.Todo.map((todo, i) => (
                        todo.isShow ?
                            <TodoCard todo={todo} key={i} handleRemove={this.handleRemove} />
                            : 
                            null)
                    )}
                </div>
            </div>
        );
    }
}

export default inject('store')(observer (App));
