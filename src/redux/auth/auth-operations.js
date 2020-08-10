import authActions from './auth-actions';
import Axios from 'axios';

Axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    Axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => dispatch => {
  dispatch(authActions.registerRequest());

  Axios.post('/users/signup', credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.registerSuccess(data));
    })
    .catch(error => dispatch(authActions.registerError(error.message)));
};

const logIn = credentials => dispatch => {
  dispatch(authActions.loginRequest());

  Axios.post('/users/login', credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.loginSuccess(data));
    })
    .catch(error => dispatch(authActions.loginError(error.message)));
};

const logOut = () => dispatch => {
  dispatch(authActions.logoutRequest());

  Axios.post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch(error => dispatch(authActions.logoutError(error.message)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());

  Axios.get('/users/current')
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch(error => dispatch(authActions.getCurrentUserError(error.message)));
};

export default { register, logIn, logOut, getCurrentUser };
