import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';

const Navigation = ({ isAuthenticated }) => {
  return (
    <>
      <ul className={styles.NavList}>
        <li>
          <NavLink
            exact
            to="/"
            className={styles.NavLink}
            activeClassName={styles.NavLink__active}
          >
            Головна
          </NavLink>
        </li>

        {isAuthenticated && (
          <li>
            <NavLink
              to="/contacts"
              className={styles.NavLink}
              activeClassName={styles.NavLink__active}
            >
              Контакти
            </NavLink>
          </li>
        )}
      </ul>
    </>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
