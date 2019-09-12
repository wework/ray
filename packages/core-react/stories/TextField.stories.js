import React from 'react';
import { storiesOf } from '@storybook/react';
import TextField from '../src/components/TextField';

storiesOf('TextField', module)
  .add('default', () => (
    <TextField id="example" value={undefined} placeholder="hello" />
  ))
  .add('required', () => (
    <TextField id="example" value={undefined} placeholder="hello" required />
  ))
  .add('error', () => (
    <TextField
      id="example"
      value={undefined}
      placeholder="hello"
      error="something went wrong"
    />
  ))
  .add('with value', () => (
    <TextField id="example" value="worlds" placeholder="hello" />
  ))
  .add('disabled', () => (
    <TextField id="example" value="worlds" placeholder="hello" disabled />
  ))
  .add('compact', () => (
    <TextField id="example" value="worlds" placeholder="hello" compact />
  ))
  .add('Email Input w/ Hint', () => {
    return (
      <TextField
        label="Email Address"
        id="unique456"
        type="email"
        placeholder="arya.stark@winterfell.org"
        hint="Hint hint, your name of choice goes here."
      />
    );
  })
  .add('Email Input w/ Hint Error', () => {
    return (
      <TextField
        label="Email Address"
        id="unique456"
        type="email"
        placeholder="arya.stark@winterfell.org"
        hintError="This is an error hint."
      />
    );
  })
  .add('Email Input w/ Hint Success', () => {
    return (
      <TextField
        label="Email Address"
        id="unique456"
        type="email"
        placeholder="arya.stark@winterfell.org"
        hintSuccess="Kaplah! This is a success hint."
      />
    );
  })
  .add('Text Input w/ Icon Start', () => {
    return (
      <TextField
        label="Email Address"
        id="unique456"
        type="email"
        placeholder="arya.stark@winterfell.org"
        // iconStart={true}
        icon={
          <svg className="ray-text-field__icon--start" viewBox="0 0 25 25">
            <g id="budicon-profile-picture">
              <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
            </g>
          </svg>
        }
      />
    );
  })
  .add('Text Input w/ Icon End', () => {
    return (
      <TextField
        label="Email Address"
        id="unique456"
        type="email"
        placeholder="arya.stark@winterfell.org"
        // iconEnd={true}
        icon={
          <svg className="ray-text-field__icon--end" viewBox="0 0 25 25">
            <g id="budicon-profile-picture">
              <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
            </g>
          </svg>
        }
      />
    );
  })
  .add('Text Input w/ Icon Start w/ Prepend', () => {
    return (
      <TextField
        label="Email Address"
        id="unique456"
        type="email"
        placeholder="arya.stark@winterfell.org"
        // iconPrepend={true}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            style={{ height: '1rem' }}
          >
            <g id="budicon-profile-picture">
              <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
            </g>
          </svg>
        }
      />
    );
  });
