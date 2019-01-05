import { types } from 'mobx-state-tree';

const Todo = types.model('Todo', {
        name: types.string,
        details: types.string,
        is_done: false,
        id: types.string,
    }
).actions(self => ({
    markDone() {
        self.is_done = true;
    },
    markUnDone() {
        self.is_done = false;
    }
}));

export default Todo;