import React  from 'react';
import { observer } from 'mobx-react';
import BookmarkItem from './BookmarkItem';

const MarkerView = ({ bookmarks, handleAdd, Bookmarks}) => {
  return (
      Bookmarks.map(item => (
        <BookmarkItem
          bookmark={item}
          key={item.id}        
          handleAdd={handleAdd}
          disabled={bookmarks.find((self) => self.id === item.id)}
        />
      ))
  );
}

export default observer(MarkerView);