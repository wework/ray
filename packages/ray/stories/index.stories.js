import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

import '../lib/application.scss';

storiesOf('Typography', module)
  .add(
    'All',
    () => `
      <h1 class="title0">Hello World</h1>
      <h2 class="title1">Hello World</h2>
      <h3 class="title2">Hello World</h3>
      <h4 class="title3">Hello World</h4>
      <h5 class="title4">Hello World</h5>
      <p class="copy1">Lorem ipsum dolor amet williamsburg poke migas raw denim, 8-bit jean shorts gentrify. Jianbing craft beer lo-fi man bun everyday carry flexitarian. Humblebrag jean shorts intelligentsia, freegan everyday carry shaman bespoke. Fam hashtag keffiyeh helvetica squid bitters humblebrag hell of vaporware celiac glossier chillwave.</p>
      <p class="copy2">This is the default text across the site, and <a href="javascript:;">this</a> is a link.</p>
      <p class="copy3">Lorem ipsum dolor amet williamsburg poke migas raw denim, 8-bit jean shorts gentrify. Jianbing craft beer lo-fi man bun everyday carry flexitarian. Humblebrag jean shorts intelligentsia, freegan everyday carry shaman bespoke. Fam hashtag keffiyeh helvetica squid bitters humblebrag hell of vaporware celiac glossier chillwave.</p>
      <p class="copy4">Lorem ipsum dolor amet williamsburg poke migas raw denim, 8-bit jean shorts gentrify. Jianbing craft beer lo-fi man bun everyday carry flexitarian. Humblebrag jean shorts intelligentsia, freegan everyday carry shaman bespoke. Fam hashtag keffiyeh helvetica squid bitters humblebrag hell of vaporware celiac glossier chillwave.</p>
      `
  )
  .add(
    'heading + copy',
    () => `
      <h1 class="title0">Hello World</h1>
      <p class="copy1">Lorem ipsum dolor amet williamsburg poke migas raw denim, 8-bit jean shorts gentrify. Jianbing craft beer lo-fi man bun everyday carry flexitarian. Humblebrag jean shorts intelligentsia, freegan everyday carry shaman bespoke. Fam hashtag keffiyeh helvetica squid bitters humblebrag hell of vaporware celiac glossier chillwave.</p>
    `
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
  )
  .add(
    'secondary, link',
    () => `
      <a href="javascript:;" class="btn--secondary">Hello World</a>
    `
  );

storiesOf('Grid', module).add(
  'primary',
  () => `
    <div class="container">lol</div>
  `
);

storiesOf('Forms', module).add(
  'primary',
  () => `
    <fieldset>
      <label for="email">Email address</label>
      <input id="email" type="text" placeholder="arya.stark@winterfell.com" />
      <div class="hint">Helpful instruction about this field</div>
    </fieldset>
  `
);
