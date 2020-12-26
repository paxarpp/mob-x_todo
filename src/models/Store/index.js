import { types } from 'mobx-state-tree';
import Todo from './Todo/Todo';
import { Tabs } from './Tab';
import Bookmark from './Bookmark';
import { TaskStoreTypesActions } from './TaskStoreTypesActions';
import { TaskStoreTypesViews } from './TaskStoreTypesViews';


export const Store = types.model({ 
    Todo: types.array(Todo),
    Tabs,
    Bookmarks: types.array(Bookmark),
    selectedTodo: types.safeReference(Todo),
    selectedBookmarkIds: types.array(types.string),
    showModal: types.string,
  })
  .actions(TaskStoreTypesActions)
  .views(TaskStoreTypesViews);
