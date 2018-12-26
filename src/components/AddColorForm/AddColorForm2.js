import React from 'react';
import PropTypes from 'prop-types';

const AddColorForm = ({ onNewColor = f=>f }) => {
    let _title, _color;
    const submit = e =>{
        e.preventDefault();
        onNewColor(_title.value, _color.value);
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    };

    return (
        <form onSubmit={submit}>
            <input ref={ input => _title = input } type="text" placeholder="color title..." />
            <input ref={ input => _color = input } type="color" />
            <button>Add</button>
        </form>
    );
}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func
};

AddColorForm.defaultProps = {
    onNewColor: f=>f
};

export default AddColorForm;