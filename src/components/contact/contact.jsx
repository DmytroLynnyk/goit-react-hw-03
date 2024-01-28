import css from './contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';

export const Contact = ({ user: { id, name, number } }) => {
  return (
    <div className={css.contactItem}>
      <div className={css.userInfo}>
        <p className={css.userName}>
          <IoMdPerson className={css.contactIcon} />
          {name}
        </p>
        <p className={css.userPhone}>
          <FaPhoneAlt className={css.contactIcon} />
          {number}
        </p>
      </div>
      <button className={css.deleteBtn}>Delete</button>
    </div>
  );
};