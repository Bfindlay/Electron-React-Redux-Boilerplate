import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import { App, Root } from './components';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const container = document.getElementById('app');
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#FFF',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will us the default color
  },
});

render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={Root}>
          <IndexRoute component={App} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  container
);
