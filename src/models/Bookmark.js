import { types } from 'mobx-state-tree';

const Bookmark = types.model({
  title: types.string,
  id: types.string,
});

export default Bookmark;