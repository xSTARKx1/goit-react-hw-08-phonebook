import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <>
      <ul className={styles.NavList}>
        <li>
          <NavLink
            to="/register"
            className={styles.NavLink}
            activeClassName={styles.NavLink__active}
          >
            Реєстрація
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={styles.NavLink}
            activeClassName={styles.NavLink__active}
          >
            Логін
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default AuthNav;
