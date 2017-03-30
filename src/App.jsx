import React from 'react';
import { UIRouter, UIView, pushStateLocationPlugin } from 'ui-router-react';
import { allStates, configRouter } from './router.config';

export const App = () => (
  <UIRouter plugins={[pushStateLocationPlugin]} states={allStates} config={configRouter}>
    <UIView />
  </UIRouter>
);

