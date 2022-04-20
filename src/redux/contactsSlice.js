import { createSlice, combineReducers } from '@reduxjs/toolkit';

import { testGetContacts } from './fetchContacts';

// Дефолтные значения для списка контактов
export const defaulContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'dima', number: '227-915-26' },
];

// создаю слайс для контактов
export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: defaulContacts,
  },
  reducers: {
    // Редюсер для ДОБАВЛЕНИЯ нового контакта с помощю Immer который работает под капотом
    addContact(state, action) {
      state.items.push(action.payload);
    },

    // Редюсер для УДАЛЕНИЯ контакта с помощю Immer который работает под капотом
    remove(state, action) {
      state.items = state.items.filter(el => el.id !== action.payload);
    },
  },
});

// Слайс для фильтрации контактов
export const filterSlice = createSlice({
  name: 'contacts',
  initialState: '',
  reducers: {
    filter(_, action) {
      return action.payload;
    },
  },
});

// использую метод combineReducers для создания одного корневого редюсера
// со всеми значениями из вышенаписаных слайсов
export const rootReducer = combineReducers({
  contacts: contactSlice.reducer,
  filter: filterSlice.reducer,

  [testGetContacts.reducerPath]: testGetContacts.reducer,
});

// Експорт всех редюсеров
export const { addContact, remove, getContactsFulfilled } =
  contactSlice.actions;
export const { filter } = filterSlice.actions;
