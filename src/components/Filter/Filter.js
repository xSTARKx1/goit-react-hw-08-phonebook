import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { phonebookSelectors, phonebookActions } from '../../redux/phonebook';
import styles from './Filter.module.css';

const Filter = ({ value, changeFilter }) => (
  <>
    <label className={styles.filter_title}>
      Знайти контакт за іменем
      <br />
      <input type="text" value={value} onChange={changeFilter} />
    </label>
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: phonebookSelectors.getFilterValue(state),
});

const mapDispatchToProps = dispatch => ({
  changeFilter: e => dispatch(phonebookActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
