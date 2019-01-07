import React, { Component } from 'react';

class Form extends Component {

    onSubmit = e => {
        e.preventDefault();
        const { store } = this.props;
        store.add({
            name: this.nameInput.value,
            details: this.detailsInput.value,
        });
        e.target.reset();
        this.nameInput.focus();
    };

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <label  htmlFor="name">
                    Сделать
                    <input
                        required
                        className="input"
                        type="text"
                        ref={input => (this.nameInput = input)}
                        id="name"
                    />
                </label>
                <label  htmlFor="details">
                    Подробнее
                    <input
                        required
                        className="input"
                        type="text"
                        ref={input => (this.detailsInput = input)}
                        id="details"
                    />
                </label>
                <button 
                    className="btn" 
                    type="submit">
                    Add
                </button>
            </form>
        );
    };
}

export default Form;
