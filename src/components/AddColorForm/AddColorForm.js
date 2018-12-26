import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddColorForm extends Component {
    //constructor(props) {
        //super(props);
        //this.submit = this.submit.bind(this);
    //}
    static propTypes = {
        onNewColor: PropTypes.func
    };
    static defaultProps = {
        onNewColor: f=>f
    };

    submit(e) {
        e.preventDefault();
        const { _title, _color } = this.refs;
        this.props.onNewColor(_title.value, _color.value);
        alert(`New Color: ${_title.value} ${_color.value}`);
        _title.value = '#fff';
        _color.value = '#000000';
        _title.focus();
    }

    render() {
        return (
            <form onSubmit={this.submit.bind(this)} >
                <input ref="_title" type="text" placeholder="color title..." />
                <input ref="_color" type="color" />
                <button>Add</button>
            </form>
        );
    }
}

export default AddColorForm;
