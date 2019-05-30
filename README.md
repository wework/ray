# Ray – WeWork Design System

[![Netlify Status](https://api.netlify.com/api/v1/badges/1fc61cc7-d0e8-4424-977e-8fa3f3a237b2/deploy-status)](https://app.netlify.com/sites/ray-docs/deploys) [![CircleCI](https://circleci.com/gh/wework/ray.svg?style=svg)](https://circleci.com/gh/wework/ray) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Coverage Status](https://coveralls.io/repos/github/wework/ray/badge.svg?branch=master)](https://coveralls.io/github/wework/ray?branch=master) [![NPM Version](https://img.shields.io/npm/v/@wework/ray-core.svg)](https://www.npmjs.com/package/@wework/ray-core) [![Contributors](https://img.shields.io/github/contributors/wework/ray.svg)](#contributors)

<page-intro>Resources for building interfaces with WeWork's design system. [npm package](https://www.npmjs.com/package/@wework/ray-core)</page-intro>

## Getting Started

See the [getting started docs](https://ray.wework.com/getting-started/).

## Development

```bash
# to install dependencies and bootstrap lerna
$ yarn bootstrap

# to start all dev servers
$ yarn dev

# to only start storybook dev server
$ npx lerna run storybook --scope="@wework/ray-core" --parallel

# to only start docs site dev server
$ npx lerna run dev --scope="ray-website-gatsby"  --parallel
```

## Contributing

This project uses [commitizen](https://github.com/commitizen/cz-cli).

When commiting, please use the following command and follow the prompts:

```bash
$ yarn commit
```

## [Release](https://github.com/wework/ray/releases) (WeWork staff)

See [RELEASING.md](./RELEASING.md) for documentation.

## Ownership

This repository is maintained by Demand Generation of Growth Tech at WeWork.

Its lead maintainer is [Adam Raider](https://github.com/adamraider), please either [submit an issue](https://github.com/wework/ray/issues/new) or reach out to Adam at [adam.raider@wework.com](mailto:adam.raider@wework.com) for questions or concerns.
