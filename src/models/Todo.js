import { types } from 'mobx-state-tree';

const Todo = types.model('Todo', {
    name: types.string,
    details: types.string,
    is_done: false,
    id: types.number,
}).actions(self => ({
    markDone() {
        self.is_done = true;
    },
    markUnDone() {
        self.is_done = false;
    }
})).views(self => ({
    status() {
        return self.is_done ? "Сделано" : "Не сделано"
    }
}));

 export default Todo;