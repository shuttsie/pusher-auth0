import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Notes from './Pages/Notes';
import Chat from './Chat/Chat';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route path='/' render={(props) => <App auth={auth} {...props} />} />
        <Route
          path='/home'
          render={(props) => <Home auth={auth} {...props} />}
        />
        <Route
          path='/meetings'
          render={(props) => <Home auth={auth} {...props} />}
        />
        <Route
          path='/chat'
          render={(props) =>
            !auth.isAuthenticated() ? (
              <Redirect to='/home' />
            ) : (
              <Chat auth={auth} {...props} />
            )
          }
        />
        <Route
          path='/profile'
          render={(props) =>
            !auth.isAuthenticated() ? (
              <Redirect to='/home' />
            ) : (
              <Profile auth={auth} {...props} />
            )
          }
        />
        <Route
          path='/notes'
          render={(props) =>
            !auth.isAuthenticated() ? (
              <Redirect to='/home' />
            ) : (
              <Notes auth={auth} {...props} />
            )
          }
        />
        <Route
          path='/callback'
          render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
      </div>
    </Router>
  );
};
