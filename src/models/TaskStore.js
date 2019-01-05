import { types } from 'mobx-state-tree';
import Todo from './Todo';
import uuidv4 from 'uuid/v4';

const TaskStore = types.model({ 
  Todo: types.array(Todo), 
  selectedTab: types.string,
})
  .actions(self => ({
    add(task) {
      task.id = uuidv4();
      self.Todo.push(task);
    },
    remove(task) {
      const index = self.Todo.findIndex(todo => todo.id === task.id);
      self.Todo.splice(index, 1);
    },
    showTab(tab) {
      self.selectedTab = tab;
    }
  }))
  .views(self =>({
    get doneTodo() {
      return self.Todo.filter(todo => todo.is_done);
    },
    get undoneTodo() {
      return self.Todo.filter(todo => !todo.is_done);
    },
  }))

export default TaskStore;