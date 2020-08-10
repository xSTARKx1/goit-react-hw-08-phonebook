import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';

const contacts = createReducer([], {
  [actions.fetchContactSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
  [actions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
