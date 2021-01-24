import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { chengeFilter } from "../redux/actions";

function Filter() {
    const value = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();

    return (<label className="labelBlock">
        Find contacts by name <input type="text" value={value} onChange={(e) => dispatch(chengeFilter(e.currentTarget.value))} className="inputStyles"/>
        </label>)
};

export default Filter;