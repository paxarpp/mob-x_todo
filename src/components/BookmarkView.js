import React  from 'react';
import { observer } from 'mobx-react';
import BookmarkItem from './BookmarkItem';

const BookmarkView = ({bookmarks, handleRemove, changeSelectedBookmark}) => ( 
  <ul>
    {bookmarks.map(mark => (
      <li key={mark.id} className="boorkmark-list-item">
          <BookmarkItem bookmark={mark} handleRemove={handleRemove} />
          <input type="checkbox" onChange={changeSelectedBookmark(mark.id)} />
      </li>))
    }
  </ul>
);

export default observer(BookmarkView);