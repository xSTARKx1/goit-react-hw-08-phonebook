import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from './components/AppBar';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() =>
  import('./views/HomeView' /*webpackChunkName: "homeView"*/),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /*webpackChunkName: "ContactsView"*/),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /*webpackChunkName: "RegisterView"*/),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /*webpackChunkName: "LoginView"*/),
);
const NotFound = lazy(() =>
  import('./views/NotFound' /*webpackChunkName: "NotFound"*/),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path="/" exact component={HomeView} />
            <PrivateRoute path="/contacts" component={ContactsView} />
            <PublicRoute path="/register" restricted component={RegisterView} />
            <PublicRoute path="/login" restricted component={LoginView} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
