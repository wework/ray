# Ray

[![Netlify Status](https://api.netlify.com/api/v1/badges/1fc61cc7-d0e8-4424-977e-8fa3f3a237b2/deploy-status)](https://app.netlify.com/sites/wework-ray/deploys) [![CircleCI](https://circleci.com/gh/WeConnect/ray.svg?style=svg&circle-token=99fe6d74b0b60e0113df0e37df0009ba77793b1d)](https://circleci.com/gh/WeConnect/ray) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Coverage Status](https://coveralls.io/repos/github/WeConnect/ray/badge.svg?t=cuEPSr)](https://coveralls.io/github/WeConnect/ray)

## 🚧 **Warning**: Work-in-progress, do not use on production

Resources for building interfaces with WeWork's design system. [npm package](https://www.npmjs.com/package/@wework/ray)

## Installation

```bash
$ yarn add @wework/ray-core
# or
$ npm install --save @wework/ray-core
```

## Development

```bash
# to install dependencies, this will also bootstrap lerna
$ yarn install

# to start storybook dev server
$ npx lerna run storybook --scope="@wework/ray-core"

# to start docs site dev server
$ npx lerna run dev --scope="ray-website-gatsby"
```

## Usage

```
.
├── html
│   ├── components
├── es
│   ├── index.js
│   ├── global
│   ├── components
├── umd
│   ├── index.js
│   ├── global
│   ├── components
├── scss
│   ├── ray.scss
│   ├── global
│   ├── components
├── css
│   ├── ray.css
│   ├── ray.css.map
│   ├── ray.min.css
│   ├── ray.min.css.map
├── LICENSE
└── README.md
```

```scss
@import '@wework/ray-core';
```

```js
import { Select } from '@wework/ray-core';
```

## Contributing

This project uses [commitzen](https://github.com/commitizen/cz-cli).

When commiting, please use the following command and follow the prompts:

```bash
$ yarn commit
```

## [Release](https://github.com/WeConnect/ray/releases)

Releases are automatically created when a commit is merged into master. Circle CI will kick off a job, bump the version and publish to the npm registry.

If a manual release needs to be made, make sure you have a `GH_TOKEN`, a GitHub personal access token with write acccess to WeConnect/ray. Also, you will need an `.npmrc` with the contents `//registry.npmjs.org/:_authToken=${NPM_TOKEN}`, where `NPM_TOKEN` is an NPM access token with write access to the WeWork organization. Then run:

```bash
$ yarn install
$ yarn build
$ yarn lerna:publish
```

![](https://media.giphy.com/media/NXWYyKAHim63u/giphy.gif)
