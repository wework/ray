import { storiesOf } from '@storybook/react';
import React from 'react';
import { IconPosition, Select } from '../src/components/Select/Select';

storiesOf('Core Comps | Select', module)
  .add('select', () => (
    <Select label="name" value={9} options={[{ value: 9, label: 'Wework ' }]} />
  ))
  .add('select w/ placeholder', () => (
    <Select
      label="name"
      options={[
        { value: '9', label: 'Wework ' },
        { value: '8', label: 'WeGrow ' }
      ]}
      placeholder="Select Value"
    />
  ))
  .add('select compact', () => (
    <Select
      label="name"
      options={[{ value: 9, label: 'Wework ' }, { value: 8, label: 'WeGrow' }]}
      compact={true}
    />
  ))
  .add('select w/ error', () => (
    <Select label="name" options={[]} error={true} />
  ))
  .add('select w/ icon start', () => (
    <Select
      label="name"
      options={[{ value: 9, label: 'Wework ' }]}
      iconPosition={IconPosition.Start}
      icon={
        <svg className="ray-select__icon--start" viewBox="0 0 25 25">
          <g id="budicon-profile-picture">
            <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
          </g>
        </svg>
      }
    />
  ))
  .add('select w/ icon end', () => (
    <Select
      label="name"
      options={[{ value: 9, label: 'Wework ' }]}
      rtl={true}
      iconPosition={IconPosition.End}
      icon={
        <svg className="ray-select__icon--start" viewBox="0 0 25 25">
          <g id="budicon-profile-picture">
            <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
          </g>
        </svg>
      }
    />
  ))
  .add('select w/ Icon Start Prepend', () => (
    <Select
      label="name"
      options={[{ value: 9, label: 'Wework ' }]}
      iconPosition={IconPosition.Prepend}
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
  ))
  .add('select w/ icon End Prepend', () => (
    <Select
      label="name"
      options={[{ value: 9, label: 'Wework ' }]}
      rtl={true}
      iconPosition={IconPosition.Prepend}
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
  ));
