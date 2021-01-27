/* eslint-disable import/no-anonymous-default-export */
import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
// import { persistStore, FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { itemsRedusser, filterReduser } from "./redussers";

// const persistConfig = {
//   key: 'contact',
//   storage,
//   blacklist: ['filter'],
// }

const contactsReduser = combineReducers({
    items: itemsRedusser,
    filter: filterReduser
});

const store = configureStore({
    reducer: {
        contacts: contactsReduser
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: getDefaultMiddleware({
    // serializableCheck: {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    // }
  })
})

// const persistore = persistStore(store);

export default store;