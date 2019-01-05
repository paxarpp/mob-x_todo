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

    showTab = (tab) => () => {
        const { store } = this.props;
        store.showTab(tab);
    }

    isActive = name => {
        const { store } = this.props;
        return store.selectedTab === name ? 'active' : '';
    }
  
    render() {
    const { store } = this.props;
    const _todos = store.selectedTab === 'all' ? 
        store.Todo
        :
        store.selectedTab === 'done' ?
            store.doneTodo
            :
            store.selectedTab === 'undone' &&
            store.undoneTodo
        return (
            <div className="App">
                <header className="App-header">
                    <h3 className="subtitle">Make a new To do</h3>
                </header>
                <div>
                    <Form store={store}/>
                    <span className={`tab ${this.isActive('all')}`} onClick={this.showTab('all')}>
                        все
                        <span className="tab__count">{store.Todo.length}</span>
                    </span>
                    <span className={`tab ${this.isActive('done')}`} onClick={this.showTab('done')}>
                        выполненные
                        <span className="tab__count">{store.doneTodo.length}</span>
                    </span>
                    <span className={`tab ${this.isActive('undone')}`} onClick={this.showTab('undone')}>
                        Не выполненные
                        <span className="tab__count">{store.undoneTodo.length}</span>
                    </span>
                </div>
                <div className="card-container">
                    {_todos.map((todo, i) => (
                        <TodoCard todo={todo} key={i} handleRemove={this.handleRemove} />))
                    }
                </div>
            </div>
        );
    }
}

export default inject('store')(observer (App));
