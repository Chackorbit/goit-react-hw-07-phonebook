import s from './ContactList.module.css';
import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from 'redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();

  const getContacts = state => state.items.items;
  const getFilter = state => state.filter;

  const getAllContacts = state => {
    const contacts = getContacts(state);
    const searchName = getFilter(state);

    const normalizeFilter = searchName.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const allContacts = useSelector(getAllContacts);

  return (
    <div className={s.container}>
      <ul className={s.ul}>
        {allContacts.length < 1 ? (
          <p>We dont have contacts</p>
        ) : (
          allContacts.map(el => (
            <ContactItem
              key={nanoid()}
              name={el.name}
              number={el.number}
              id={el.id}
              deleteContact={() => dispatch(remove(el.id))}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default ContactList;
