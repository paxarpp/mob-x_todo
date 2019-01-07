import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TodoCard from '../components/TodoCard';
import Tab from '../components/Tab';
import Form from '../components/Form';
import ModalEditTodo from '../components/ModalEditTodo';
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

    handleAddBookmark = (todo) => e => {
        console.log(e.target.value);
        console.log(todo);
        
        
        todo.addBookmark(e.target.value);
    }

    render() {
    const { store } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <h3 className="subtitle">Make a new To do</h3>
                </header>
                <div>
                    <Form store={store} />
                    {
                        store.Tab.map((tab, i) => (
                            <Tab tab={tab} 
                                key={`${i}-${tab.title}`} 
                                markActive={this.markActive}
                                todoLengthByIdTab={store.todoLengthByIdTab} />
                        ))
                    }
                </div>
                <div className="card-container">
                    {store.activeTodoByTab.map((todo, i) => (
                        <TodoCard 
                            todo={todo} 
                            key={i} 
                            handleRemove={this.handleRemove}
                            handleAddBookmark = {this.handleAddBookmark}
                            selectTodo={store.selectTodo} />))
                    }
                </div>
                {
                    store.selectedTodo &&
                    <ModalEditTodo store={store} />
                }
            </div>
        );
    }
}

export default inject('store')(observer (App));
