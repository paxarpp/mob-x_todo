export const TAB_ID = {
  ALL: 1,
  DONE: 2,
  UNDONE: 3,
};

export const TAB = [
  {title: 'все', isActive: true, id: TAB_ID.ALL},
  {title: 'Выполненные', isActive: false, id: TAB_ID.DONE},
  {title: 'не выполненные', isActive: false, id: TAB_ID.UNDONE},
];