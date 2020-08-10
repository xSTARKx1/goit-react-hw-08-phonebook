import React, { Component } from 'react';
import ContactForm from '../components/contactForm';
import ContactList from '../components/contactList';
import Filter from '../components/Filter';
import { phonebookOperations, phonebookSelectors } from '../redux/phonebook';
import styles from '../App.module.css';
import { connect } from 'react-redux';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts } = this.props;

    return (
      <div className={styles.wrapper}>
        <h1>Телефонна книга</h1>
        <ContactForm />
        {contacts.length > 0 && <h2>Контакти</h2>}
        {contacts.length >= 2 && <Filter />}
        {contacts.length > 0 && <ContactList />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: phonebookSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
