import React from 'react';
import { Provider } from 'react-redux';
import { UIRouter, UIView } from 'ui-router-react';
import { router } from './router.config';
import { store } from './store';

export const App = () => (
  <Provider store={store}>
    <UIRouter router={router}>
      <UIView />
    </UIRouter>
  </Provider>
);
