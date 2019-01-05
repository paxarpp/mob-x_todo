import React from 'react';
import { observer } from 'mobx-react';

const TodoCard = ({todo, handleRemove}) => (
    <div className="card">
        <div className="card-body">
            <h4 className={`card-title ${todo.is_done ? 'done' : ''}`}>{todo.name}</h4>
            <span className="remover" onClick={handleRemove(todo)}>
                {String.fromCharCode(10008)}
            </span>
            <div>
                {todo.details}
            </div>
        </div>
        <div className="status" onClick={!todo.is_done ? todo.markDone : todo.markUnDone}> 
            {
                todo.is_done ? String.fromCharCode(10004) : ''
            }
        </div>
    </div>
)

export default observer(TodoCard);