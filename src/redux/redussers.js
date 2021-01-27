import { createReducer } from "@reduxjs/toolkit";
import { chengeFilter } from "./actions.js";
import { fetchContact, formSubmit, deleteContact } from './operations';

export const itemsRedusser = createReducer([], {
  [fetchContact.fulfilled]: (_, { payload }) => payload,
  [formSubmit.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) => state.filter(({id}) => id !== payload),
});

export const filterReduser = createReducer('', {
  [chengeFilter]: (_, { payload }) => payload,
});

export const isLoading = createReducer(false, {
  [fetchContact.pending]: () => true,
  [fetchContact.fulfilled]: () => false,
  [fetchContact.rejected]: () => false,
  [formSubmit.pending]: () => true,
  [formSubmit.fulfilled]: () => false,
  [formSubmit.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
})