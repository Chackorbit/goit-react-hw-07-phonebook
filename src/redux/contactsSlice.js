import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { getContacts } from './fetchContacts';
import { testGetContacts } from './fetchContacts';

export const defaulContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'dima', number: '227-915-26' },
];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: defaulContacts,
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    remove(state, action) {
      state.items = state.items.filter(el => el.id !== action.payload);
    },
  },
});

export const filterSlice = createSlice({
  name: 'contacts',
  initialState: '',
  reducers: {
    filter(_, action) {
      return action.payload;
    },
  },
});

export const rootReducer = combineReducers({
  contacts: contactSlice.reducer,
  filter: filterSlice.reducer,

  [testGetContacts.reducerPath]: testGetContacts.reducer,
});

export const { addContact, remove, getContactsFulfilled } =
  contactSlice.actions;
// export const { getContactsFulfilled } = getContactsSlice.actions;
export const { filter } = filterSlice.actions;
