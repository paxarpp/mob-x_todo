import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './containers/App';
import TaskStore from './models/TaskStore';
//debugging tools
import { onPatch } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';
import { TAB } from './components/constants';

const store = TaskStore.create({
  Todo: [],
  Tab: TAB
});

onPatch(store, patch => {
  console.log(patch)
});

makeInspectable(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
