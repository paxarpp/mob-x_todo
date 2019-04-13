import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
//debugging tools
import { onPatch } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';

import './index.css';
import App from './containers/App';
import TaskStore from './models/TaskStore';
import { initialState } from './initialState';

const store = TaskStore.create(initialState);

onPatch(store, patch => {
  console.log(patch)
});

makeInspectable(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
