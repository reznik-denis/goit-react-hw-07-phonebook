import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from "../redux/actions";

function Button({ id }) {
    const dispatch = useDispatch();
    return <button
        type="button"
        className="buttonDelete"
        onClick={() => dispatch(deleteContact(id))}>Delete
    </button>
};

export default Button;