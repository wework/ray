import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

import '../lib/application.scss';

const withContainer = html => `
  <div class="container" style="margin: 100px auto;">
    <div class="col-12">
      ${html}
    </div>
  </div>
`;

storiesOf('Typography', module)
  .add('All', () =>
    withContainer(
      ['p1', 'p2', 'p3', 'h1', 'h2', 'h3', 'h4']
        .map(type => {
          const tag = type[0] === 'h' ? type : 'p';
          return `
          <h4 class="h4">${type}</h4>
          <${tag} class="${type}">You have the opportunity to try new things, but also to make mistakes and fail without the pressure of being judged.</ ${tag}>
          <hr style="opacity: 0.5; margin: 20px 0;" />
        `;
        })
        .join('')
    )
  )
  .add('h1 + p1', () =>
    withContainer(`
      <h1 class="h1">Hello World</h1>
      <p class="p1">Lorem ipsum dolor amet williamsburg poke migas raw denim, 8-bit jean shorts gentrify. Jianbing craft beer lo-fi man bun everyday carry flexitarian. Humblebrag jean shorts intelligentsia, freegan everyday carry shaman bespoke. Fam hashtag keffiyeh helvetica squid bitters humblebrag hell of vaporware celiac glossier chillwave.</p>
    `)
  )
  .add('h2 + p2', () =>
    withContainer(`
      <h1 class="h2">Hello World</h1>
      <p class="p2">Lorem ipsum dolor amet williamsburg poke migas raw denim, 8-bit jean shorts gentrify. Jianbing craft beer lo-fi man bun everyday carry flexitarian. Humblebrag jean shorts intelligentsia, freegan everyday carry shaman bespoke. Fam hashtag keffiyeh helvetica squid bitters humblebrag hell of vaporware celiac glossier chillwave.</p>
    `)
  );

storiesOf('Buttons', module)
  .add(
    'primary',
    () => `
      <button class="btn--primary">Hello World</button>
    `
  )
  .add(
    'secondary',
    () => `
      <button class="btn--secondary">Hello World</button>
    `
  );

storiesOf('Grid', module).add(
  'primary',
  () => `
    <div class="container">lol</div>
  `
);

storiesOf('Forms', module)
  .add(
    'single fieldset',
    () => `
      <fieldset>
        <label for="email">Email address</label>
        <input id="email" type="text" placeholder="arya.stark@winterfell.com" />
      </fieldset>
    `
  )
  .add('example form', () =>
    withContainer(`
        <h2 class="h2">Sign up</h2>
        <fieldset>
          <label for="name">Name</label>
          <input id="name" type="text" placeholder="Arya Stark" />
        </fieldset>
        <fieldset>
          <label for="email">Email address</label>
          <input id="email" type="text" placeholder="arya.stark@winterfell.com" />
        </fieldset>
        <fieldset>
          <label for="password">Password</label>
          <input id="password" type="password" placeholder="the.north.remembers" />
        </fieldset>
      `)
  );
