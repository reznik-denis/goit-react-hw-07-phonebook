import { createReducer } from "@reduxjs/toolkit";
import { deleteContact, chengeFilter, formSubmitSuccess, formSubmitRequest, formSubmitError } from "./actions.js";

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const itemsRedusser = createReducer(contacts, {
  [formSubmitSuccess]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) => state.filter(contact => contact.id !== payload),
});

export const filterReduser = createReducer('', {
  [chengeFilter]: (_, { payload }) => payload,
});

export const contactsItems = createReducer([], {
  [formSubmitSuccess]: (state, { payload }) => [...state, payload],
});

export const loading = createReducer(false, {
  [formSubmitRequest]: () => true,
  [formSubmitSuccess]: () => false,
  [formSubmitError]: () => false
})