import { types } from 'mobx-state-tree';

const Tab = types.model({
  title: types.string,
  isActive: types.boolean,
  id: types.number,
}
);

export const Tabs = types.model({
  items: types.array(Tab),
}).actions(self => ({
  showTab(id) {
    self.items.forEach(t => {
      t.isActive = id === t.id;
    });
  },
}))
  .views((self) => ({
    get ActiveTabId() {
      return self.items.find(t => t.isActive).id;
    },
  }));
