import React, { useCallback } from 'react';
import { observer, inject } from 'mobx-react';
import BookmarkView from './BookmarkView';

const BookmarkList = ({ store: { removeBookmark, toggleSelectedBookmark, Bookmarks = [] } }) => {

  const handleRemove = useCallback((mark) => () => {
    removeBookmark(mark);
  }, [removeBookmark])

  const changeSelectedBookmark = useCallback((id) => () => {
    toggleSelectedBookmark(id);
  }, [toggleSelectedBookmark])

  return (
    <BookmarkView bookmarks={Bookmarks} handleRemove={handleRemove} changeSelectedBookmark={changeSelectedBookmark} />
  );
}  

export default inject('store')(observer(BookmarkList));