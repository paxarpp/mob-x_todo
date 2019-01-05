import { types } from 'mobx-state-tree';
import Todo from './Todo';
import Tab from './Tab';
import uuidv4 from 'uuid/v4';

const TaskStore = types.model({ 
  Todo: types.array(Todo),
  Tab: types.array(Tab),
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
    showTab(id) {
      self.Tab = self.Tab.map(t => {
        t.isActive = id === t.id;
        return t;
      });
    }}))
  .views(self =>({
    get doneTodo() {
      return self.Todo.filter(todo => todo.is_done);
    },
    get undoneTodo() {
      return self.Todo.filter(todo => !todo.is_done);
    },
    get ActiveTabId() {
      return self.Tab.find(t => t.isActive).id;
    },
    get todoLengthByIdTab() {
      return ({
        1: self.Todo.length, 
        2: self.Todo.filter(t => t.is_done).length, 
        3: self.Todo.filter(t => !t.is_done).length
      })
    }
  }));

export default TaskStore;