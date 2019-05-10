import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
//
import { Container, Grid, Cell } from '.';

const stories = storiesOf('Grid', module);
stories.addDecorator(withKnobs);

const highlightColor = 'rgba(159, 128, 255, 0.5)';

stories
  .add('span values', () => (
    <Container debug={boolean('Debug', false)}>
      <Grid style={{ marginBottom: '1rem' }}>
        <Cell style={{ backgroundColor: highlightColor }} span={2}>
          SPAN 2
        </Cell>
        <Cell style={{ backgroundColor: highlightColor }} span={2}>
          SPAN 2
        </Cell>
        <Cell style={{ backgroundColor: highlightColor }} span={2}>
          SPAN 2
        </Cell>
        <Cell style={{ backgroundColor: highlightColor }} span={4}>
          SPAN 4
        </Cell>
      </Grid>
      <Grid style={{ marginBottom: '1rem' }}>
        <Cell style={{ backgroundColor: highlightColor }} span={3}>
          SPAN 3
        </Cell>
        <Cell style={{ backgroundColor: highlightColor }} span={3}>
          SPAN 3
        </Cell>
        <Cell style={{ backgroundColor: highlightColor }} span={2}>
          SPAN 2
        </Cell>
        <Cell style={{ backgroundColor: highlightColor }} span={4}>
          SPAN 4
        </Cell>
      </Grid>
      <Grid style={{ marginBottom: '1rem' }}>
        <Cell style={{ backgroundColor: highlightColor }} span={8}>
          SPAN 8
        </Cell>
        <Cell style={{ backgroundColor: highlightColor }} span={4}>
          SPAN 4
        </Cell>
      </Grid>
    </Container>
  ))
  .add('span no values', () => (
    <Container debug={boolean('Debug', false)}>
      <Grid>
        <Cell style={{ backgroundColor: highlightColor }}>SPAN 4</Cell>
        <Cell style={{ backgroundColor: highlightColor }}>SPAN 4</Cell>
        <Cell style={{ backgroundColor: highlightColor }}>SPAN 4</Cell>
      </Grid>
    </Container>
  ))
  .add('responsive', () => (
    <Container debug={boolean('Debug', false)}>
      <Grid>
        <Cell span={[4, 6, 10]} style={{ backgroundColor: highlightColor }}>
          Phone(4), Tablet(6), Desktop(10)
        </Cell>
      </Grid>
    </Container>
  ))
  .add('just container', () => (
    <Container debug={boolean('Debug', false)}>
      <div style={{ backgroundColor: highlightColor }}>Just a container</div>
    </Container>
  ));
