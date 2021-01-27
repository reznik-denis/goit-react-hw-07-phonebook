/* eslint-disable import/no-anonymous-default-export */
import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import { itemsRedusser, filterReduser, isLoading } from "./redussers";

const contactsReduser = combineReducers({
    items: itemsRedusser,
    filter: filterReduser,
    loading: isLoading
});

const store = configureStore({
    reducer: {
        contacts: contactsReduser
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: getDefaultMiddleware({
  })
})

export default store;