import { types } from 'mobx-state-tree';
import Todo from './Todo';

const TaskStore = types.model('Todo', { Todo: types.array(Todo) })
  .actions(self => ({
    add(task) {
      task.id = new Date().getMilliseconds();
      self.Todo.push(task);
    },
    remove(task) {
      const index = self.Todo.findIndex(todo => todo.id === task.id);
      self.Todo.splice(index, 1);
    }
  })
);

export default TaskStore;