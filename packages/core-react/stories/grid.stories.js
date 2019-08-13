import React from 'react';
import { storiesOf } from '@storybook/react';

import { Container, Grid, Cell } from '../src/components/Grid';

storiesOf('Grid', module).add('default', () => (
  <Container>
    <Grid>
      <Cell>hello world</Cell>
      <Cell>hello world</Cell>
      <Cell>hello world</Cell>
      <Cell push={1} span={7} style={{ backgroundColor: 'coral' }}>
        hello world
      </Cell>
    </Grid>
  </Container>
));
