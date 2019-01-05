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

    isActive = name => {
        const { store } = this.props;
        return store.selectedTab === name ? 'active' : '';
    }
  
    render() {
    const { store } = this.props;
    const countTodo = store.Todo.length;
    const countDone = store.Todo.filter(todo => todo.is_done === true).length;
    const countUndone = countTodo - countDone;
        return (
            <div className="App">
                <header className="App-header">
                    <h3 className="subtitle">Make a new To do</h3>
                </header>
                <div>
                    <Form store={store}/>
                    <span className={`tab ${this.isActive('all')}`} onClick={this.showAll}>
                        все
                        <span className="tab__count">{countTodo}</span>
                    </span>
                    <span className={`tab ${this.isActive('done')}`} onClick={this.showDone}>
                        выполненные
                        <span className="tab__count">{countDone}</span>
                    </span>
                    <span className={`tab ${this.isActive('undone')}`} onClick={this.showUndone}>
                        Не выполненные
                        <span className="tab__count">{countUndone}</span>
                    </span>
                </div>
                <div className="card-container">
                    {store.Todo.map((todo, i) => (
                        todo.isShow ?
                            <TodoCard todo={todo} key={i} handleRemove={this.handleRemove} selectedTab={store.selectedTab} />
                            : 
                            null)
                    )}
                </div>
            </div>
        );
    }
}

export default inject('store')(observer (App));
