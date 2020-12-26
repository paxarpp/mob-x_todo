import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import makeInspectable from 'mobx-devtools-mst';
import App from './containers/App';
import { Store } from './models/Store';
import { TAB } from './components/constants';
import './index.css';

const store = Store.create({
  Todo: [],
  Tabs: {
    items: TAB,
  },
  Bookmarks: [],
  selectedBookmarkIds: [],
  showModal: '',
});

makeInspectable(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
