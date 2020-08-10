import React from 'react';
import Proptypes, { shape } from 'prop-types';
import { connect } from 'react-redux';
import Contact from './Contact';
import {
  phonebookOperations,
  phonebookActions,
  phonebookSelectors,
} from '../../redux/phonebook';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact, onChangeFilter }) => (
  <>
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={styles.contact}>
          <Contact
            name={name}
            number={number}
            id={id}
            onDeleteContact={() => {
              onDeleteContact(id);

              if (contacts.length === 1) {
                onChangeFilter();
              }
            }}
          />
        </li>
      ))}
    </ul>
  </>
);

ContactList.propTypes = {
  contacts: Proptypes.arrayOf(
    shape({
      id: Proptypes.string.isRequired,
    }),
  ),
};

const mapStateToProps = state => ({
  contacts: phonebookSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phonebookOperations.deleteContact(id)),
  onChangeFilter: () => dispatch(phonebookActions.changeFilter('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
