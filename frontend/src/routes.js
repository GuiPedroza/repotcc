import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './pages/app/App';
import Login from './pages/login/Login';
import RouteAuthorization from './authorization/routeAuthorization';
import Pages from './authorization/pages';

const history = createBrowserHistory();

const login = new Login();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      //if (login.isAuthenticated()) {
        return <Component {...props} />;
      // } else {
      //   return (
      //     <Redirect
      //       to={{
      //         pathname: '/login',
      //         state: { from: props.location },
      //       }}
      //     />
      //   );
      // }
    }}
  />
);

const routes = (
  <Router history={history}>
    <Switch>
      <Route
        path="/logout"
        render={props => {
          login.logout();
          return null;
        }}
      />

      <Route
        path="/login"
        render={props => {
          //if (login.isAuthenticated()) {
            return (
              <Redirect
                to={{ pathname: '/', state: { from: props.location } }}
              />
            );
          // } else {
          //   return <Login auth={login} {...props} />;
          // }
        }}
      />

      <Route
        path="/"
        render={props => {
          //if (login.isAuthenticated()) {
            let permission = sessionStorage.getItem('Authorization')? JSON.parse(sessionStorage.getItem('Authorization')).user:null;
            if(permission){
            return (
              <App auth={login}>
                {Object.keys(Pages).map(key => {
                  return (
                    <PrivateRoute
                      exact
                      key={key}
                      path={Pages[key].route}
                      component={RouteAuthorization(
                        Pages[key].component,
                        Pages[key].name,
                        login
                      )}
                    />
                  );
                })}
              </App>
            );
          } else {
            return <Login auth={login} {...props} />;
          }
        }}
      />
    </Switch>
  </Router>
);

export default routes;
