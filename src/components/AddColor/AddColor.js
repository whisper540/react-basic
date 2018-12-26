import React, { Component } from 'react';

class AddColor extends Component {
    render() {
        return (
            <form onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="color title..." required />
                <input type="color" required />
                <button>Add</button>
            </form>
        );
    }
}

export default AddColor;
