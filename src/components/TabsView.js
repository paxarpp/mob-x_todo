import React from 'react';
import { observer } from 'mobx-react';
import Tab from './Tab';

const TabsView = ({tabs, ...props}) => (
  tabs.map(tab => <Tab key={tab.id} tab={tab} {...props} />)
);

export default observer(TabsView);