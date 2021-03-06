import { nanoid } from 'nanoid';
import s from './ContactItem.module.css';
import ButtonDelete from 'components/ButtonDelete/ButtonDelete';

const ContactItem = ({ deleteContact, name, number, id, btnLoading }) => {
  return (
    <li className={s.li} key={nanoid()}>
      {name}: {number}
      <ButtonDelete
        deleteContact={deleteContact}
        id={id}
        btnLoading={btnLoading}
      />
    </li>
  );
};

export default ContactItem;
