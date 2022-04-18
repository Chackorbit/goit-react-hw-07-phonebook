import ContactForma from './ContactForma/ContactForma';
import ContactList from './ContactList/ContactList';
import s from './App.module.css';
import Filter from './Filter/Filter';

// export const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// };

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
