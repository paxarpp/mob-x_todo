import { types } from 'mobx-state-tree';
import Todo from './Todo';
import Tab from './Tab';
import Bookmark from './Bookmark';
import uuidv4 from 'uuid/v4';
import { TAB_ID } from '../components/constants';

const TaskStore = types.model({ 
  Todo: types.array(Todo),
  Tab: types.array(Tab),
  Bookmarks: types.array(Bookmark),
  selectedTodo: types.safeReference(Todo),
  selectedBookmarkIds: types.array(types.string),
})
  .actions(self => ({
    add(task) {
      task.id = uuidv4();
      self.Todo.push(task);
    },
    addBookmark(mark) {
      mark.id = uuidv4();
      self.Bookmarks.push(mark);
    },
    remove(task) {
      const index = self.Todo.findIndex(todo => todo.id === task.id);
      self.Todo.splice(index, 1);
    },
    removeBookmark(mark) {
      self.Todo.forEach(todo => {
        const index = todo.bookmarks.findIndex(bookmark => mark.id === bookmark.id);
        todo.bookmarks.splice(index, 1);
      });
      const index = self.Bookmarks.findIndex(bookmark => mark.id === bookmark.id);
      self.Bookmarks.splice(index, 1);
    },
    toggleSelectedBookmark(id) {
      const index = self.selectedBookmarkIds.findIndex(bookmarkId => id === bookmarkId);
      if (index === -1) {
        self.selectedBookmarkIds.push(id);
      } else {
        self.selectedBookmarkIds.splice(index, 1);
      }
    },
    update(task) { 
      self.Todo = self.Todo.map(todo => {
        if (todo.id === task.id) {
          return task;
        } else {
          return todo;
        }
      })
    },
    showTab(id) {
      self.Tab = self.Tab.map(t => {
        t.isActive = id === t.id;
        return t;
      });
    },
    selectTodo(id) {
      self.selectedTodo = id;
    }
}))
  .views(self =>({
    get doneTodo() {
      return self.Todo.filter(todo => todo.is_done).filter(checkSelectmark(self));
    },
    get undoneTodo() {
      return self.Todo.filter(todo => !todo.is_done).filter(checkSelectmark(self));
    },
    get ActiveTabId() {
      return self.Tab.find(t => t.isActive).id;
    },
    get todoLengthByIdTab() {
      return ({
        [TAB_ID.ALL]: self.Todo.length, 
        [TAB_ID.DONE]: self.Todo.filter(t => t.is_done).length, 
        [TAB_ID.UNDONE]: self.Todo.filter(t => !t.is_done).length
      })
    },
    get activeTodoByTab() {
      const activTabId = self.ActiveTabId;
      return activTabId === TAB_ID.ALL ? 
        self.Todo.filter(checkSelectmark(self))
        :
        activTabId === TAB_ID.DONE ?
        self.doneTodo
            :
            activTabId === TAB_ID.UNDONE &&
            self.undoneTodo
    },
    get selectedBookmarkIdsEmpty() {
      return self.selectedBookmarkIds.length === 0;
    }
  }));

export default TaskStore;

const checkSelectmark = (self) => todo => {
  const has = self.selectedBookmarkIds.reduce((acc, id) => {
    if (todo.bookmarks.find(mark => mark.id === id))
      acc += 1;
    return acc;
  }, 0);
  return has === self.selectedBookmarkIds.length;
};

