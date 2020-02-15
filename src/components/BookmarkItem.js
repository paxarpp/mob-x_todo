import React from 'react';
import { observer } from 'mobx-react';

const BookmarkItem = ({bookmark, handleRemove=null, handleAdd=null, disabled=false}) => (
  <span className={`bookmark__title ${disabled && 'disabled'}`}>
    { bookmark.title }
    { handleRemove && 
      <span className="bookmark-remover" onClick={handleRemove(bookmark)}>
        {String.fromCharCode(10008)}
      </span>
    }
    { handleAdd && !disabled &&
      <span className="bookmark-add" onClick={handleAdd(bookmark)}>
        {String.fromCharCode(43)}
      </span>
    }
  </span>
);

export default observer(BookmarkItem);