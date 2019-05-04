import { types } from 'mobx-state-tree';
import Todo from '../Todo/Todo';
import Tab from '../Tab';
import Bookmark from '../Bookmark';
import { TaskStoreTypesActions } from './TaskStoreTypesActions';
import { TaskStoreTypesViews } from './TaskStoreTypesViews';

const TaskStore = types.model({ 
    Todo: types.array(Todo),
    Tab: types.array(Tab),
    Bookmarks: types.array(Bookmark),
    selectedTodo: types.safeReference(Todo),
    selectedBookmarkIds: types.array(types.string),
    showFormCreateTodo: types.boolean,
  })
  .actions(TaskStoreTypesActions)
  .views(TaskStoreTypesViews);

export default TaskStore;
