import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'; //These functions make our components observable and be able to use the store
import TodoCard from '../components/TodoCard';
import Tab from '../components/Tab';
import Form from '../components/Form';
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
    const _todos = store.ActiveTabId === 1 ? 
        store.Todo
        :
        store.ActiveTabId === 2 ?
            store.doneTodo
            :
            store.ActiveTabId === 3 &&
            store.undoneTodo
        return (
            <div className="App">
                <header className="App-header">
                    <h3 className="subtitle">Make a new To do</h3>
                </header>
                <div>
                    <Form store={store}/>
                    {
                        store.Tab.map((tb, i) => (
                            <Tab tab={tb} 
                                key={`${i}-${tb.title}`} 
                                markActive={this.markActive}
                                todoLengthByIdTab={store.todoLengthByIdTab} />
                        ))
                    }
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
