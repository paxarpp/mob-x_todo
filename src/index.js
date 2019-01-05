import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './containers/App';
import TaskStore from './models/TaskStore';
//debugging tools
import { onPatch } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';

const store = TaskStore.create({
  Todo: [],
  Tab: [
    {title: 'все', isActive: true, id: 1},
    {title: 'Выполненные', isActive: false, id: 2},
    {title: 'не выполненные', isActive: false, id: 3},
  ]
});

onPatch(store, patch => {
  console.log(patch)
});

makeInspectable(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
