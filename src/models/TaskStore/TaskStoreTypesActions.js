import uuidv4 from 'uuid/v4';

export const TaskStoreTypesActions = self => ({
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
    }
    else {
      self.selectedBookmarkIds.splice(index, 1);
    }
  },
  update(task) {
    self.Todo = self.Todo.map(todo => {
      if (todo.id === task.id) {
      return task;
      }
      else {
      return todo;
      }
    });
  },
  showTab(id) {
    self.Tab = self.Tab.map(t => {
      t.isActive = id === t.id;
      return t;
    });
  },
  selectTodo(id) {
    self.selectedTodo = id;
  },
  toggleShowForm() {
    self.showFormCreateTodo = !self.showFormCreateTodo;
  }
});
