import React from 'react';
import { observer } from 'mobx-react';
import BookmarkItem from './BookmarkItem';

const TodoCard = ({
        todo,
        handleRemove,
        selectTodo,
        handleAddBookmark
    }) => (
    <div className="card">
        <div className="card-body">
            <h4 className={`card-title ${todo.is_done ? 'done' : ''}`}>{todo.name}</h4>
            <span className="edit" onClick={todo.is_done ? null : () => selectTodo(todo.id)}>
                {
                    !todo.is_done &&
                    String.fromCharCode(9998)
                }
            </span>
            <span className="remover" onClick={handleRemove(todo)}>
                {String.fromCharCode(10008)}
            </span>
            <div>
                {todo.details}
            </div>
            <div style={{position: 'relative', height: '20px'}}>
                <select 
                    className = "edit"
                    onChange={handleAddBookmark(todo)} > 
                    <option value={{id:'1', title: 'test'}}>test</option>
                    <option value={{id:'2', title: '2test2'}}>test2</option>
                </select>
                {
                    todo.bookmarks.map((bookmark, index) => (
                        <BookmarkItem 
                            key={index}
                            bookmark={bookmark} />))
                }
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