import { createAction } from "@reduxjs/toolkit";

export const deleteContact = createAction('contact/Delete');

export const chengeFilter = createAction('contact/ChengeFilter');

export const formSubmitRequest = createAction('contact/formSubmitRequest');

export const formSubmitSuccess = createAction('contact/formSubmitSuccess');

export const formSubmitError = createAction('contact/formSubmitError');

// export const formSubmitHendler = createAction('contact/FormSubmitHendler', ({ name, number }) => {
//     return {
//         payload: {
//             id: shortid.generate(),
//             name,
//             number
//         },
//     };
// });