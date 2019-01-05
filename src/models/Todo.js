import { types } from 'mobx-state-tree';

const Todo = types.model('Todo', {
        name: types.string,
        details: types.string,
        is_done: false,
        id: types.string,
        isShow: types.boolean,
    }
).actions(self => ({
    markDone(selectedTab) {
        self.isShow = selectedTab !== 'undone';
        self.is_done = true;
    },
    markUnDone(selectedTab) {
        self.isShow = selectedTab !== 'done';
        self.is_done = false;
    }
})).views(self => ({
    status() {
        return self.is_done ? "Сделано" : "Не сделано"
    }
}));

export default Todo;