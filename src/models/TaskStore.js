import { types } from 'mobx-state-tree';
import Todo from './Todo';
import Tab from './Tab';
import uuidv4 from 'uuid/v4';
import { TAB_ID } from '../components/constants';

const TaskStore = types.model({ 
  Todo: types.array(Todo),
  Tab: types.array(Tab),
  selectedTodo: types.safeReference(Todo),
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
    update(task) { 
      self.Todo = self.Todo.map(todo => {
        if (todo.id === task.id) {
          return task;
        } else {
          return todo;
        }
      })
    },
    showTab(id) {
      self.Tab = self.Tab.map(t => {
        t.isActive = id === t.id;
        return t;
      });
    },
    selectTodo(id) {
      self.selectedTodo = id;
    }
}))
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
        [TAB_ID.ALL]: self.Todo.length, 
        [TAB_ID.DONE]: self.Todo.filter(t => t.is_done).length, 
        [TAB_ID.UNDONE]: self.Todo.filter(t => !t.is_done).length
      })
    },
    get activeTodoByTab() {
      const activTabId = self.ActiveTabId;
      return activTabId === TAB_ID.ALL ? 
        self.Todo
        :
        activTabId === TAB_ID.DONE ?
        self.doneTodo
            :
            activTabId === TAB_ID.UNDONE &&
            self.undoneTodo
    }
  }));

export default TaskStore;