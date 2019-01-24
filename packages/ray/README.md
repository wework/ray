# Ray

[![CircleCI](https://circleci.com/gh/WeConnect/ray.svg?style=svg&circle-token=99fe6d74b0b60e0113df0e37df0009ba77793b1d)](https://circleci.com/gh/WeConnect/ray) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Resources for building interfaces with WeWork's design system

## Installation

```bash
yarn add @wework/ray
# or
npm install --save @wework/ray
```

Then import the library in your sass file:

```scss
@import '@wework/ray';
```

## Development

```bash
yarn install # to install dependencies
yarn storybook # to start storybook dev server
```

## Contributing

This project uses [semantic-release](https://github.com/semantic-release/semantic-release) and [commitzen](https://github.com/commitizen/cz-cli).

When commiting, please use following command and follow the prompts:

```bash
yarn commit
```

## Release

Releases are automatically created when a commit is merged into master. Circle CI will kick off a job, bump the version and publish to the npm registry.

If a manual release needs to be made, make sure you have the following environment variables available:

| Environment variable | Description                                                          |
| -------------------- | -------------------------------------------------------------------- |
| `GH_TOKEN`           | GitHub access token, make sure it has push-access to this repo       |
| `NPM_TOKEN`          | NPM access token, make sure it has access to the WeWork organization |

Run:

```bash
npx semantic-release
```

![](https://media.giphy.com/media/NXWYyKAHim63u/giphy.gif)
