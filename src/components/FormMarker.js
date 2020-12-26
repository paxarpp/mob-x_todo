import React, {  } from 'react';
import { observer, inject } from 'mobx-react';

const FormMarker = ({ store: { addBookmark } }) => {
  const nameInput = React.createRef();
  const onSubmit = () => {
    if (!nameInput.current.value) {
      return;
    }
    addBookmark({ title: nameInput.current.value });
    nameInput.current.value = '';
    nameInput.current.focus();
  };

  return  (
    <div className={'form'}>
      <label htmlFor="title">
        маркер
        <input
          required
          className="input"
          type="text"
          ref={nameInput}
          id="title"
        />
      </label>
      <button 
        className="btn" 
        onClick={onSubmit}
      >
        Add
      </button>
    </div>
  );
}  

export default inject('store')(observer(FormMarker));