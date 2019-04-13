export const checkSelectmark = (self) => todo => {
  const has = self.selectedBookmarkIds.reduce((acc, id) => {
    if (todo.bookmarks.find(mark => mark.id === id))
        acc += 1;
    return acc;
    }, 0);
  return has === self.selectedBookmarkIds.length;
};
