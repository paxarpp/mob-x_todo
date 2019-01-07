import React from 'react';
import { observer } from 'mobx-react';

const BookmarkItem = ({bookmark, handleRemove=null}) => (
    < span className = "bookmark__title" >
        {bookmark.title}
        <span className="bookmark-remover" onClick={handleRemove(bookmark)}>
            {String.fromCharCode(10008)}
        </span>
    </span>
);

export default observer(BookmarkItem);