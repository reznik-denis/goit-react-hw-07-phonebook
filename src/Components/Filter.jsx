import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { chengeFilter } from "../redux/actions";
import { selectors } from "../redux";

function Filter() {
    const value = useSelector(state => selectors.getFilter(state));
    const dispatch = useDispatch();

    return (<label className="labelBlock">
        Find contacts by name <input type="text" value={value} onChange={(e) => dispatch(chengeFilter(e.currentTarget.value))} className="inputStyles"/>
        </label>)
};

export default Filter;