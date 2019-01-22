import React from 'react';
import { storiesOf } from '@storybook/react';

const Image = props => {
  return <img {...props} style={{ width: '100%' }} />;
};

const withContainer = html => (
  <div className="container" style={{ margin: '100px auto' }}>
    <div className="col-12">{html}</div>
  </div>
);
storiesOf('Typography', module)
  .addWithJSX('All', () =>
    withContainer(
      ['p1', 'p2', 'p3', 'h1', 'h2', 'h3', 'h4'].map(type => {
        const Tag = type[0] === 'h' ? type : 'p';
        return (
          <React.Fragment>
            <h4 className="label">className: .{type}</h4>
            <Tag className={type}>
              You have the opportunity to try new things, but also to make
              mistakes and fail without the pressure of being judged.
            </Tag>
            <hr style={{ opacity: 0.5, margin: '20px 0' }} />
          </React.Fragment>
        );
      })
    )
  )
  .addWithJSX('h1 + p1', () =>
    withContainer(
      <React.Fragment>
        <h1 className="h1">Hello World</h1>
        <p className="p1">
          Lorem ipsum dolor amet williamsburg poke migas raw denim, 8-bit jean
          shorts gentrify. Jianbing craft beer lo-fi man bun everyday carry
          flexitarian. Humblebrag jean shorts intelligentsia, freegan everyday
          carry shaman bespoke. Fam hashtag keffiyeh helvetica squid bitters
          humblebrag hell of vaporware celiac glossier chillwave.
        </p>
      </React.Fragment>
    )
  )
  .addWithJSX('h2 + p2', () =>
    withContainer(
      <React.Fragment>
        <h1 className="h2">Hello World</h1>
        <p className="p2">
          Lorem ipsum dolor amet williamsburg poke migas raw denim, 8-bit jean
          shorts gentrify. Jianbing craft beer lo-fi man bun everyday carry
          flexitarian. Humblebrag jean shorts intelligentsia, freegan everyday
          carry shaman bespoke. Fam hashtag keffiyeh helvetica squid bitters
          humblebrag hell of vaporware celiac glossier chillwave.
        </p>
      </React.Fragment>
    )
  );

storiesOf('Buttons', module)
  .addWithJSX('primary', () => (
    <button className="btn--primary">Hello World</button>
  ))
  .addWithJSX('secondary', () => (
    <button className="btn--secondary">Hello World</button>
  ));

storiesOf('Grid', module).addWithJSX('example', () => (
  <div className="container container--visual" style={{ minHeight: '100vh' }}>
    <div className="col-6">
      <Image src="/hero1.png" />
    </div>
  </div>
));

storiesOf('Forms', module)
  .addWithJSX('single field', () =>
    withContainer(
      <div className="field">
        <input id="email" type="text" placeholder="arya.stark@winterfell.com" />
        <label for="email">Email address</label>
      </div>
    )
  )
  .addWithJSX('example form', () =>
    withContainer(
      <React.Fragment>
        <h2 className="h2">Sign up</h2>
        <p>
          You have the opportunity to try new things, but also to make mistakes
          and fail without the pressure of being judged.
        </p>
        <div className="field">
          <input id="name" type="text" placeholder="Arya Stark" />
          <label for="name">Name</label>
        </div>
        <div className="field">
          <input
            id="email"
            type="text"
            placeholder="arya.stark@winterfell.com"
          />
          <label for="email">Email address</label>
        </div>
        <div className="field">
          <input
            id="password"
            type="password"
            placeholder="the.north.remembers"
          />
          <label for="password">Password</label>
        </div>

        <button className="btn--primary">Submit</button>
      </React.Fragment>
    )
  );
