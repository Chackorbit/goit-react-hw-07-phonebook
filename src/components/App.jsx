import ContactForma from './ContactForma/ContactForma';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import s from './App.module.css';

export default function App() {
  return (
    <div className={s.section}>
      <p className={s.title}>Phonebook</p>
      <ContactForma />

      <p className={s.title}>Contacts</p>
      <Filter />
      <ContactList />
    </div>
  );
}
