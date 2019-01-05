import { types } from 'mobx-state-tree';

const Tab = types.model({
        title: types.string,
        isActive: true,
        id: types.number,
    }
)

export default Tab;