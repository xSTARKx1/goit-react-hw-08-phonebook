import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';

const UserMenu = ({ name, onLogout }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.message}>Вітаємо, {name} :)</p>
      <button type="button" onClick={onLogout} className={styles.button}>
        Вийти
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
