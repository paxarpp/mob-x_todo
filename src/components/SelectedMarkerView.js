import React  from 'react';
import { observer } from 'mobx-react';
import BookmarkItem from './BookmarkItem';

const SelectedMarkerView = ({ bookmarks, handleRemove }) => {
  return (
      bookmarks.map(item => (
        <BookmarkItem
          disabled
          handleRemove={handleRemove}
          bookmark={item}
          key={item.id}
        />
      ))
  );
}

export default observer(SelectedMarkerView);