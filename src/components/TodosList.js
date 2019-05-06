import React from 'react';
import { observer } from 'mobx-react';
import TodoCard from './TodoCard';

const TodosList = ({activeTodoByTab, ...props}) => (
    activeTodoByTab.map(todo => <TodoCard key={todo.id} todo={todo} {...props} />)
);

export default observer(TodosList);