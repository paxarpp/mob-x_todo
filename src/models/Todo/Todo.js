import { types } from 'mobx-state-tree';
import Bookmark from '../Bookmark';
import { TodoTypesActions } from './TodoTypesActions';

const Todo = types.model({
    name: types.string,
    details: types.string,
    is_done: false,
    id: types.identifier,
    bookmarks: types.array(Bookmark),
  }
).actions(TodoTypesActions);

export default Todo;