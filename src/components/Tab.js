import React from 'react';
import { observer } from 'mobx-react';

const Tab = ({tab, todoLengthByIdTab, markActive}) => (
  <span className={`tab ${tab.isActive ? 'active' : ''}`} onClick={markActive(tab.id)}>
    {
      tab.title
    }
    <span className="tab__count">{todoLengthByIdTab[tab.id]}</span>
  </span>
)

export default observer(Tab);