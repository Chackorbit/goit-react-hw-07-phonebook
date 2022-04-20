import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './contactsSlice';
import { testGetContacts } from './fetchContacts';
import { setupListeners } from '@reduxjs/toolkit/query';

// Создание стора
export const store = configureStore({
  reducer: rootReducer,

  // Добавление промежуточного программного обеспечения API включает кэширование
  // и другие полезные функции `rtk-query`.
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    testGetContacts.middleware,
  ],
});

setupListeners(store.dispatch);
