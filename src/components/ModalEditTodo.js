import React, { Component } from 'react';

class ModalEditTodo extends Component {

    render() {
        const {store} = this.props;
        return(
            <div className="modal">
            <form
                onSubmit={e =>{
                e.preventDefault();
                const name = this.nameInput.value;
                const details = this.detailsInput.value;
                store.update({
                    ...store.selectedTodo,
                    name: name.trim() === '' ? store.selectedTodo.name : name,
                    details:  details.trim() === '' ? store.selectedTodo.details : details,
                    });
                store.selectTodo(undefined);
                }}>
                    <input
                        className="input"
                        type="text"
                        ref={input => (this.nameInput = input)}
                        defaultValue={store.selectedTodo.name}
                    />
                    <input
                        className="input"
                        type="text"
                        ref={input => (this.detailsInput = input)}
                        defaultValue={store.selectedTodo.details}
                    />
                    <button 
                        className="btn" 
                        type="submit">
                        Edit
                    </button>
            </form>
            </div>
        );
    }
}

export default ModalEditTodo;