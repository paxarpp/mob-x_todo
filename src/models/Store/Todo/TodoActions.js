export const TodoActions = self => ({
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
});