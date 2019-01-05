import React, { Component } from 'react';

class Form extends Component {

    render() {
        const {store} = this.props;
        return(
            <form
                onSubmit={e =>{
                e.preventDefault();
                store.add({
                    name: this.nameInput.value,
                    details: this.detailsInput.value,
                    });
                e.target.reset();
                this.nameInput.focus();
                }}>
                <label  htmlFor="name">
                        Name
                        <input
                            required
                            className="input"
                            type="text"
                            ref={input => (this.nameInput = input)}
                            id="name"
                        />
                    </label>
                    <label  htmlFor="details">
                        Details
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
    }
}

export default Form;
