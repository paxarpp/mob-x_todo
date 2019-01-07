import React from 'react';
import { observer } from 'mobx-react';

const BookmarkItem = ({bookmark}) => (
    < span className = "bookmark__title" >
        {bookmark.title}
    </span>
);

export default observer(BookmarkItem);