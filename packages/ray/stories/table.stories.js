import React from 'react';
import { storiesOf } from '@storybook/react';

import withPadding from './util/withPadding';

const SAMPLE_DATA = [
  {
    first_name: 'Jeanette',
    last_name: 'Penddreth',
    email: 'jpenddreth0@census.gov',
    gender: 'Female',
    ip_address: '26.58.193.2'
  },
  {
    first_name: 'Giavani',
    last_name: 'Frediani',
    email: 'gfrediani1@senate.gov',
    gender: 'Male',
    ip_address: '229.179.4.212'
  },
  {
    first_name: 'Noell',
    last_name: 'Bea',
    email: 'nbea2@imageshack.us',
    gender: 'Female',
    ip_address: '180.66.162.255'
  },
  {
    first_name: 'Willard',
    last_name: 'Valek',
    email: 'wvalek3@vk.com',
    gender: 'Male',
    ip_address: '67.76.188.26'
  }
];

const KEYS = Object.keys(SAMPLE_DATA[0]);

storiesOf('Table', module).addWithJSX('default', () =>
  withPadding(
    <table className="ray-table">
      <thead>
        <tr>
          {KEYS.map(key => (
            <th>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {SAMPLE_DATA.map(item => (
          <tr>
            {KEYS.map(key => (
              <td>{item[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
);
