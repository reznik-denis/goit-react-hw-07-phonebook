import Api from '../services/contactsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchContact = createAsyncThunk('contact/fetchContact', async () => {
    const contacts = await Api.fetchContact();
    return contacts;
});

export const formSubmit = createAsyncThunk('contact/formSubmit', async ({ name, number }) => {
    const data = await Api.fetchContactsAdd({ name, number });
    return data;
})

export const deleteContact = createAsyncThunk('contact/deleteContact', async (id) => {
    await Api.fetchContactsDelete(id);
    return id;
})

// export const deleteContact = (id) => async dispatch => {
//     dispatch(contactsActions.deleteContactRequest());
//     try {
//         await Api.fetchContactsDelete(id);
//         dispatch(contactsActions.deleteContactSuccess(id))
//     } catch (error) {
//         dispatch(contactsActions.deleteContactError(error))
//     }
// }

// export const fetchContact = () => async dispatch => {
//     dispatch(contactsActions.fetchContactRequest());
//     try {
//         const contacts = await Api.fetchContact();
//         dispatch(contactsActions.fetchContactSuccess(contacts))
//     } catch (error) {
//         dispatch(contactsActions.fetchContactError(error))
//     }
// };

// export const formSubmitHendler = ({ name, number }) => async dispatch => {
//     const contact = {
//         name,
//         number
//     };

//     dispatch(contactsActions.formSubmitRequest());
//     try {
//         const data = await Api.fetchContactsAdd(contact);
//         dispatch(contactsActions.formSubmitSuccess(data));
//     } catch (error) {
//         dispatch(contactsActions.formSubmitError(error));
//     }
// };