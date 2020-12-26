import { types } from 'mobx-state-tree';
import Bookmark from '../Bookmark';
import { TodoActions } from './TodoActions';

const Todo = types.model({
    name: types.string,
    details: types.string,
    is_done: types.optional(types.boolean, false),
    id: types.identifier,
    bookmarks: types.array(Bookmark),
  }
).actions(TodoActions);

export default Todo;