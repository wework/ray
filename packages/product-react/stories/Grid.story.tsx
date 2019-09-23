import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Container } from '../src/components/Container';
import { Grid } from '../src/components/Grid';

storiesOf('Core Comps | Grid', module)
  .add('Span 1 (default) vs Span 1 (fixed)', () => {
    return (
      <>
        <Container debug={false}>
          <Grid>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
          </Grid>
        </Container>
        <hr />
        <Container debug={false} fixed={true}>
          <Grid>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
          </Grid>
        </Container>
      </>
    );
  })

  .add('default', () => {
    return (
      <>
        <Container debug={true} fixed={true}>
          <Grid>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
          </Grid>
        </Container>
        <hr />
        <Container debug={true}>
          <Grid>
            <Grid.Cell full={true}>Full</Grid.Cell>
          </Grid>
          <hr />
          <Grid>
            <Grid.Cell span={4} device={Grid.Cell.CellDevice.DESKTOP}>
              Span 4 w/ Desktop
            </Grid.Cell>
            <Grid.Cell span={4} device={Grid.Cell.CellDevice.DESKTOP}>
              Span 4 w/ Desktop
            </Grid.Cell>
            <Grid.Cell span={4} device={Grid.Cell.CellDevice.DESKTOP}>
              Span 4 w/ Desktop
            </Grid.Cell>
          </Grid>
          <hr />
          <Grid>
            <Grid.Cell span={4} device={Grid.Cell.CellDevice.TABLET}>
              Span 4 w/ Tablet
            </Grid.Cell>
            <Grid.Cell span={4} device={Grid.Cell.CellDevice.TABLET}>
              Span 4 w/ Tablet
            </Grid.Cell>
            <Grid.Cell span={4} device={Grid.Cell.CellDevice.TABLET}>
              Span 4 w/ Tablet
            </Grid.Cell>
          </Grid>
          <hr />
          <Grid>
            <Grid.Cell span={4} device={Grid.Cell.CellDevice.PHONE}>
              Span 4 w/ Phone
            </Grid.Cell>
            <Grid.Cell span={4} device={Grid.Cell.CellDevice.PHONE}>
              Span 4 w/ Phone
            </Grid.Cell>
            <Grid.Cell span={4} device={Grid.Cell.CellDevice.PHONE}>
              Span 4 w/ Phone
            </Grid.Cell>
          </Grid>
          <hr />
          <Grid>
            <Grid.Cell span={6}>Span 6</Grid.Cell>
            <Grid.Cell span={6}>Span 6</Grid.Cell>
          </Grid>
          <hr />
          <Grid>
            <Grid.Cell span={3}>Span 3</Grid.Cell>
            <Grid.Cell span={3}>Span 3</Grid.Cell>
            <Grid.Cell span={3}>Span 3</Grid.Cell>
            <Grid.Cell span={3}>Span 3</Grid.Cell>
          </Grid>
          <hr />
          <Grid>
            <Grid.Cell align={Grid.Cell.CellAlign.TOP}>Align top</Grid.Cell>
            <Grid.Cell align={Grid.Cell.CellAlign.MIDDLE}>Align middle</Grid.Cell>
            <Grid.Cell align={Grid.Cell.CellAlign.BOTTOM}>Align bottom</Grid.Cell>
          </Grid>
          <hr />
          <Grid>
            <Grid.Cell pushColumn={1}>Push no device</Grid.Cell>
            <Grid.Cell pushColumn={6}>Push no device</Grid.Cell>
            <Grid.Cell pushColumn={12}>Push no device</Grid.Cell>
          </Grid>
          <hr />
          <Grid>
            <Grid.Cell pushColumn={1} device={Grid.Cell.CellDevice.DESKTOP}>
              Push Desktop
            </Grid.Cell>
            <Grid.Cell pushColumn={6} device={Grid.Cell.CellDevice.TABLET}>
              Push Tablet
            </Grid.Cell>
            <Grid.Cell pushColumn={12} device={Grid.Cell.CellDevice.PHONE}>
              Push Phone
            </Grid.Cell>
          </Grid>
        </Container>
      </>
    );
  })
  .add('full', () => {
    return (
      <>
        <Container debug={true}>
          <Grid>
            <Grid.Cell full={true}>Full</Grid.Cell>
            <Grid.Cell full={true}>Full</Grid.Cell>
            <Grid.Cell full={true}>Full</Grid.Cell>
          </Grid>
        </Container>
      </>
    );
  })
  .add('span 1', () => {
    return (
      <>
        <Container debug={true}>
          <Grid>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
            <Grid.Cell span={1}>Span 1</Grid.Cell>
          </Grid>
        </Container>
      </>
    );
  })
  .add('span 4 on desktop', () => {
    return (
      <>
        <Container debug={true}>
          <Grid>
            <Grid.Cell span={4} device={Grid.Cell.CellDevice.DESKTOP}>
              Span 4 w/ Desktop
            </Grid.Cell>
            <Grid.Cell span={4} device={Grid.Cell.CellDevice.DESKTOP}>
              Span 4 w/ Desktop
            </Grid.Cell>
            <Grid.Cell span={4} device={Grid.Cell.CellDevice.DESKTOP}>
              Span 4 w/ Desktop
            </Grid.Cell>
          </Grid>
        </Container>
      </>
    );
  })
  .add('span 4 on tablet', () => {
    return (
      <>
        <Container debug={true}>
          <Grid>
            <Grid.Cell span={4} device={Grid.Cell.CellDevice.TABLET}>
              Span 4 w/ Tablet
            </Grid.Cell>
            <Grid.Cell span={4} device={Grid.Cell.CellDevice.TABLET}>
              Span 4 w/ Tablet
            </Grid.Cell>
            <Grid.Cell span={4} device={Grid.Cell.CellDevice.TABLET}>
              Span 4 w/ Tablet
            </Grid.Cell>
          </Grid>
        </Container>
      </>
    );
  })
  .add('span 4 on phone', () => {
    return (
      <>
        <Container debug={true}>
          <Grid>
            <Grid.Cell span={4} device={Grid.Cell.CellDevice.PHONE}>
              Span 4 w/ Phone
            </Grid.Cell>
            <Grid.Cell span={4} device={Grid.Cell.CellDevice.PHONE}>
              Span 4 w/ Phone
            </Grid.Cell>
            <Grid.Cell span={4} device={Grid.Cell.CellDevice.PHONE}>
              Span 4 w/ Phone
            </Grid.Cell>
          </Grid>
        </Container>
      </>
    );
  })
  .add('span 6', () => {
    return (
      <>
        <Container debug={true}>
          <Grid>
            <Grid.Cell span={6}>Span 6</Grid.Cell>
            <Grid.Cell span={6}>Span 6</Grid.Cell>
          </Grid>
        </Container>
      </>
    );
  })
  .add('span 3', () => {
    return (
      <>
        <Container debug={true}>
          <Grid>
            <Grid.Cell span={3}>Span 3</Grid.Cell>
            <Grid.Cell span={3}>Span 3</Grid.Cell>
            <Grid.Cell span={3}>Span 3</Grid.Cell>
            <Grid.Cell span={3}>Span 3</Grid.Cell>
          </Grid>
        </Container>
      </>
    );
  })
  .add('align top | middle | bottom', () => {
    return (
      <>
        <Container debug={true}>
          <Grid>
            <Grid.Cell align={Grid.Cell.CellAlign.TOP}>Align top</Grid.Cell>
            <Grid.Cell align={Grid.Cell.CellAlign.MIDDLE}>Align middle</Grid.Cell>
            <Grid.Cell align={Grid.Cell.CellAlign.BOTTOM}>Align bottom</Grid.Cell>
          </Grid>
        </Container>
      </>
    );
  })
  .add('push columns 1 | 6 | 12', () => {
    return (
      <>
        <Container debug={true}>
          <Grid>
            <Grid.Cell pushColumn={1}>Push column 1</Grid.Cell>
            <Grid.Cell pushColumn={6}>Push column 6</Grid.Cell>
            <Grid.Cell pushColumn={12}>Push column 12</Grid.Cell>
          </Grid>
        </Container>
      </>
    );
  })
  .add('push columns 1-desktop| 6-tablet | 12-phone', () => {
    return (
      <>
        <Container debug={true}>
          <Grid>
            <Grid.Cell pushColumn={1} device={Grid.Cell.CellDevice.DESKTOP}>
              Push Desktop
            </Grid.Cell>
            <Grid.Cell pushColumn={6} device={Grid.Cell.CellDevice.TABLET}>
              Push Tablet
            </Grid.Cell>
            <Grid.Cell pushColumn={12} device={Grid.Cell.CellDevice.PHONE}>
              Push Phone
            </Grid.Cell>
          </Grid>
        </Container>
      </>
    );
  });
