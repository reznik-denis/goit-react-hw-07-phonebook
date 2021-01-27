// import * as contactApi from "../services/contactsApi";
import * as contactsActions from './actions';
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:4040';

export const formSubmitHendler = ({ name, number }) => dispatch => {
    const contact = {
        name,
        number
    };

    dispatch(contactsActions.formSubmitRequest());

    axios.post(`/contacts`, contact)
        .then(({ data }) => dispatch(contactsActions.formSubmitSuccess(data)))
        .catch(error => dispatch(contactsActions.formSubmitError(error)));
};