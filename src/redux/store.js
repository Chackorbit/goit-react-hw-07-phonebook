import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './contactsSlice';
import { testGetContacts } from './fetchContacts';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    testGetContacts.middleware,
  ],
});

setupListeners(store.dispatch);
