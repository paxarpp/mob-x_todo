import { types } from 'mobx-state-tree';
import Bookmark from './Bookmark';

const Todo = types.model({
    name: types.string,
    details: types.string,
    is_done: false,
    id: types.identifier,
    bookmarks: types.array(Bookmark),
  }
).actions(self => ({
  markDone() {
    self.is_done = true;
  },
  markUnDone() {
    self.is_done = false;
  },
  addBookmarkInTodo(bookmark) {
    const index = self.bookmarks.findIndex(mark => mark.id === bookmark.id);
    if (index !== -1) return;
    self.bookmarks.push(bookmark);
  },
  removeBookmarkInTodo(bookmark) {
    const index = self.bookmarks.findIndex(mark => mark.id === bookmark.id);
    if (index === -1) return;
    self.bookmarks.splice(index, 1);
  },
}));

export default Todo;