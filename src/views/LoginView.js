import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import styles from './styles.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogIn(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <>
        <h2>Сторінка логіну</h2>

        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.label}>
            E-mail
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={styles.button}>
            Увійти
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onLogIn: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
