import shortid from 'shortid';
import { createAction } from "@reduxjs/toolkit";

export const deleteContact = createAction('contact/Delete');

export const chengeFilter = createAction('contact/ChengeFilter');

export const formSubmitHendler = createAction('contact/FormSubmitHendler', ({ name, number }) => {
    return {
        payload: {
            id: shortid.generate(),
            name,
            number
        },
    };
});