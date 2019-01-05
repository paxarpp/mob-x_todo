import { types } from 'mobx-state-tree';
import Todo from './Todo';
import uuidv4 from 'uuid/v4';

const TaskStore = types.model('Todo', { Todo: types.array(Todo), selectedTab: types.string })
  .actions(self => ({
    add(task) {
      task.id = uuidv4();
      task.isShow = self.selectedTab === 'undone' || self.selectedTab === 'all';
      self.Todo.push(task);
    },
    remove(task) {
      const index = self.Todo.findIndex(todo => todo.id === task.id);
      self.Todo.splice(index, 1);
    },
    showAll() {
      self.Todo.forEach(todo => todo.isShow = true);
      self.selectedTab = 'all';
    },
    showDone() {
      self.Todo.forEach(todo => {
        if (todo.is_done) {
          todo.isShow = true;
        } else {
          todo.isShow = false;
        }
      });
      self.selectedTab = 'done';
    },
    showUndone() {
      self.Todo.forEach(todo => {
        if (todo.is_done) {
          todo.isShow = false;
        } else {
          todo.isShow = true;
        }
      });
      self.selectedTab = 'undone';
    }
  })
);

export default TaskStore;