import * as contactApi from "../services/contactsApi";
import * as contactsActions from './actions';

export const fetchContacts = () => async dispatch => {
    dispatch(contactsActions.formSubmitRequest());

    try {
        const contacts = await contactApi.fetchContacts();
        dispatch(contactsActions.formSubmitSuccess(contacts));
    } catch (error) {
        dispatch(contactsActions.formSubmitError(error));
    }

};