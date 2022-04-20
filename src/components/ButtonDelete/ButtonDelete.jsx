import { AiOutlineClose } from 'react-icons/ai';
import { TailSpin } from 'react-loader-spinner';
import s from './ButtonDelete.module.css';

const ButtonDelete = ({ deleteContact, id, btnLoading }) => {
  return (
    <button
      className={s.btnDelete}
      disabled={btnLoading}
      onClick={() => deleteContact(id)}
    >
      {btnLoading ? <TailSpin height={12} width={12} /> : <AiOutlineClose />}
    </button>
  );
};

export default ButtonDelete;
