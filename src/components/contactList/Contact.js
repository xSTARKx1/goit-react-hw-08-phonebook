import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const Contact = ({ name, number, onDeleteContact }) => (
  <>
    {name}:{number}
    <button
      type="button"
      className={styles.remove_contact_btn}
      onClick={onDeleteContact}
    >
      Видалити
    </button>
  </>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
