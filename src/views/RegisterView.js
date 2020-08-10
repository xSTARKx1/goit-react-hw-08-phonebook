import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import styles from './styles.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <>
        <h2>Сторінка реєстрації</h2>

        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Ім'я
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.label}>
            Email
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
            Зареєструватися
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
