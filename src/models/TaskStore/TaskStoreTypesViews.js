import { TAB_ID } from '../../components/constants';
import { checkSelectmark } from './helpers';

export const TaskStoreTypesViews = self => ({
  get doneTodo() {
    return self.Todo.filter(todo => todo.is_done).filter(checkSelectmark(self));
  },
  get undoneTodo() {
    return self.Todo.filter(todo => !todo.is_done).filter(checkSelectmark(self));
  },
  get ActiveTabId() {
    return self.Tab.find(t => t.isActive).id;
  },
  get todoLengthByIdTab() {
    return ({
      [TAB_ID.ALL]: self.Todo.length,
      [TAB_ID.DONE]: self.Todo.filter(t => t.is_done).length,
      [TAB_ID.UNDONE]: self.Todo.filter(t => !t.is_done).length
    });
  },
  get activeTodoByTab() {
    const activTabId = self.ActiveTabId;
    return activTabId === TAB_ID.ALL ?
      self.Todo.filter(checkSelectmark(self))
      :
      activTabId === TAB_ID.DONE ?
        self.doneTodo
        :
        activTabId === TAB_ID.UNDONE &&
        self.undoneTodo;
  },
  get selectedBookmarkIdsEmpty() {
    return self.selectedBookmarkIds.length === 0;
  }
});