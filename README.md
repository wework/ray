# Ray

[![Netlify Status](https://api.netlify.com/api/v1/badges/428119e4-0053-4c50-8bb5-9aae1b689bec/deploy-status)](https://app.netlify.com/sites/wework-ray/deploys) [![CircleCI](https://circleci.com/gh/WeConnect/ray.svg?style=svg&circle-token=99fe6d74b0b60e0113df0e37df0009ba77793b1d)](https://circleci.com/gh/WeConnect/ray) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## 🚧 **Warning**: Work-in-progress, do not use on production

Resources for building interfaces with WeWork's design system. [npm package](https://www.npmjs.com/package/@wework/ray)

## Installation

```bash
$ yarn add @wework/ray
# or
$ npm install --save @wework/ray
```

## Development

```bash
$ yarn install # to install dependencies
$ yarn storybook # to start storybook dev server
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
│   ├── application.scss
│   ├── global
│   ├── components
├── css
│   ├── application.css
│   ├── application.css.map
│   ├── application.min.css
│   ├── application.min.css.map
├── LICENSE
└── README.md
```

```scss
@import '@wework/ray';
```

```js
import { Select } from '@wework/ray';
```

## Contributing

This project uses [semantic-release](https://github.com/semantic-release/semantic-release) and [commitzen](https://github.com/commitizen/cz-cli).

When commiting, please use following command and follow the prompts:

```bash
$ yarn commit
```

## [Release](https://github.com/WeConnect/ray/releases)

Releases are automatically created when a commit is merged into master. Circle CI will kick off a job, bump the version and publish to the npm registry.

If a manual release needs to be made, make sure you have the following environment variables available:

| Environment variable | Description                                                          |
| -------------------- | -------------------------------------------------------------------- |
| `GH_TOKEN`           | GitHub access token, make sure it has push-access to this repo       |
| `NPM_TOKEN`          | NPM access token, make sure it has access to the WeWork organization |

Run:

```bash
$ npx semantic-release
```

![](https://media.giphy.com/media/NXWYyKAHim63u/giphy.gif)
