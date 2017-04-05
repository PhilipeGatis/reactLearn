import React from 'react';
import { UIView } from 'ui-router-react';
import { Grid } from 'react-bootstrap';
import { NavBar } from '../components/nav-bar/component';

export const Principal = (transition) => (
  <div>
    <NavBar transition={transition} />
    <Grid fluid>
      <UIView />
    </Grid>
  </div>
);
