import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Avatar } from '../src/components/Avatar';

const fauxAvatarImage =
  'https://pbs.twimg.com/profile_images/624249118114881536/qxn_I_oR_400x400.jpg';

storiesOf('Core Comps | Avatar', module)
  .add('no avatar - small', () => {
    return <Avatar size="small" name="small" />;
  })
  .add('no avatar - medium (default size)', () => {
    return <Avatar />;
  })
  .add('no avatar - large', () => {
    return <Avatar size="large" />;
  })
  .add('avatar - small', () => {
    return <Avatar image={fauxAvatarImage} size="small" />;
  })
  .add('avatar - medium (default size)', () => {
    return <Avatar image={fauxAvatarImage} />;
  })
  .add('avatar - large', () => {
    return <Avatar image={fauxAvatarImage} size="large" />;
  })
  .add('no avatar - large (add)', () => {
    return <Avatar size="large" add />;
  })
  .add('no avatar - large (edit)', () => {
    return <Avatar size="large" edit />;
  })
  .add('avatar - large (add)', () => {
    return <Avatar size="large" image={fauxAvatarImage} add />;
  })
  .add('avatar - large (edit)', () => {
    return <Avatar size="large" image={fauxAvatarImage} edit />;
  })
  .add('no avatar - small w/ initial', () => {
    return <Avatar size="small" name="SPatrick Stewart" />;
  })
  .add('no avatar - medium (default size) w/ initial', () => {
    return <Avatar name="Patrick Stewart" />;
  })
  .add('no avatar - large w/ initial', () => {
    return <Avatar size="large" name="Patrick Stewart" />;
  })
  .add('multiple avatars', () => {
    return (
      <>
        <Avatar size="small" />
        <Avatar />
        <Avatar size="large" />

        <Avatar size="small" name="Patrick Stewart" />
        <Avatar name="Patrick Stewart" />
        <Avatar size="large" name="Patrick Stewart" />

        <Avatar size="small" add />
        <Avatar add />
        <Avatar size="large" add />

        <Avatar size="small" edit />
        <Avatar edit />
        <Avatar size="large" edit />

        <Avatar size="small" name="Patrick Stewart" add />
        <Avatar name="Patrick Stewart" add />
        <Avatar size="large" name="Patrick Stewart" add />

        <Avatar size="small" image={fauxAvatarImage} add />
        <Avatar image={fauxAvatarImage} add />
        <Avatar size="large" image={fauxAvatarImage} add />

        <Avatar size="small" image={fauxAvatarImage} edit />
        <Avatar image={fauxAvatarImage} edit />
        <Avatar size="large" image={fauxAvatarImage} edit />

        <Avatar
          size="small"
          image={fauxAvatarImage}
          add
          name="Patrick Stewart"
        />
        <Avatar image={fauxAvatarImage} add name="Patrick Stewart" />
        <Avatar
          size="large"
          image={fauxAvatarImage}
          add
          name="Patrick Stewart"
        />
      </>
    );
  });
