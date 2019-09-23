import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Container } from '../src/components/Container';

storiesOf('Core Comps | Container', module)
  .add('default', () => {
    return <Container>This is in a container</Container>;
  })
  .add('justify left', () => {
    return (
      <Container justify={Container.ContainerJustify.LEFT}>This is in a container justify left</Container>
    );
  })
  .add('justify center', () => {
    return (
      <Container justify={Container.ContainerJustify.CENTER}>
        This is in a container justify center
      </Container>
    );
  })
  .add('justify right', () => {
    return (
      <Container justify={Container.ContainerJustify.RIGHT}>
        This is in a container justify right
      </Container>
    );
  })
  .add('align left', () => {
    return (
      <Container align={Container.ContainerAlign.LEFT}>This is in a container align left</Container>
    );
  })
  .add('align right', () => {
    return (
      <Container align={Container.ContainerAlign.RIGHT}>This is in a container align right</Container>
    );
  });
