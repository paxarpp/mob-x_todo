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
    addBookmark(bookmark) {
        self.bookmarks.push(bookmark);
    }
}));

export default Todo;