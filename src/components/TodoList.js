import React from 'react';
import { observer } from 'mobx-react';

const TodoList = ({todo, store}) => (
    <div className="card">
        <div className="card-body">
            <h4 className={`card-title ${todo.is_done ? 'done' : ''}`}>{todo.name}</h4>
            <button  onClick={() => store.remove(todo)}>
                удалить
            </button>
            <div>
                {todo.details}
            </div>
        </div>
        <div className="status" > 
            {todo.status()}
        </div>
        <button  
            className={`btn ${!todo.is_done ? 'done' : 'undone'}`} 
            onClick={!todo.is_done ? todo.markDone : todo.markUnDone}
        >
            {!todo.is_done ? 'Выполнить' : 'Отменить'}
        </button>
    </div>
)

export default observer(TodoList);