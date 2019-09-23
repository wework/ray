import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Grid } from '../src/components/Grid';
import '../src/components/Container/Container.scss';

storiesOf('Core Comps | Cell', module)
  .add('default', () => {
    return <Grid.Cell>This is in a cell</Grid.Cell>;
  })
  .add('full', () => {
    return <Grid.Cell full={true}>This is in a full cell</Grid.Cell>;
  })
  .add('span 1', () => {
    return <Grid.Cell span={1}>Span 1</Grid.Cell>;
  })
  .add('span 4 on desktop', () => {
    return (
      <Grid.Cell span={4} device="desktop">
        Span 4 w/ Desktop
      </Grid.Cell>
    );
  })
  .add('span 4 on tablet', () => {
    return (
      <Grid.Cell span={4} device="tablet">
        Span 4 w/ Tablet
      </Grid.Cell>
    );
  })
  .add('span 4 on phone', () => {
    return (
      <Grid.Cell span={4} device="phone">
        Span 4 w/ Phone
      </Grid.Cell>
    );
  })
  .add('align top', () => {
    return <Grid.Cell align="top">Align top</Grid.Cell>;
  })
  .add('align middle', () => {
    return <Grid.Cell align="middle">Align middle</Grid.Cell>;
  })
  .add('align bottom', () => {
    return <Grid.Cell align="bottom">Align bottom</Grid.Cell>;
  })
  .add('push 1 column', () => {
    return <Grid.Cell pushColumn={1}>Push no device</Grid.Cell>;
  })
  .add('push 1 column on desktop', () => {
    return (
      <Grid.Cell pushColumn={1} device="desktop">
        Push desktop
      </Grid.Cell>
    );
  })
  .add('push 1 column on tablet', () => {
    return (
      <Grid.Cell pushColumn={1} device="tablet">
        Push tablet
      </Grid.Cell>
    );
  })
  .add('push 1 column on phone', () => {
    return (
      <Grid.Cell pushColumn={1} device="phone">
        Push phone
      </Grid.Cell>
    );
  });