import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.phonebook.contacts;
const getFilterValue = state => state.phonebook.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getContacts,
  getFilterValue,
  getVisibleContacts,
};
