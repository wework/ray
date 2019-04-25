# Ray – WeWork Design System

[![Netlify Status](https://api.netlify.com/api/v1/badges/1fc61cc7-d0e8-4424-977e-8fa3f3a237b2/deploy-status)](https://app.netlify.com/sites/ray-docs/deploys) [![CircleCI](https://circleci.com/gh/wework/ray.svg?style=svg)](https://circleci.com/gh/wework/ray) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Coverage Status](https://coveralls.io/repos/github/wework/ray/badge.svg?branch=master)](https://coveralls.io/github/wework/ray?branch=master) [![NPM Version](https://img.shields.io/npm/v/@wework/ray-core.svg)](https://www.npmjs.com/package/@wework/ray-core)

<page-intro>Resources for building interfaces with WeWork's design system. [npm package](https://www.npmjs.com/package/@wework/ray-core)</page-intro>

🚧 **Warning**: Work-in-progress, do not use on production.

## 🐥 Getting Started

See the [getting started docs](https://ray.wework.com/getting-started/).

## 👩🏻‍💻 Development

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

## 🤖 Contributing

This project uses [commitizen](https://github.com/commitizen/cz-cli).

When commiting, please use the following command and follow the prompts:

```bash
$ yarn commit
```

## 🚀 [Release](https://github.com/wework/ray/releases)

Releases are automatically created when a commit is merged into master. Circle CI will kick off a job, bump the version and publish to the npm registry.

If a manual release needs to be made, make sure you have a `GH_TOKEN`, a GitHub personal access token with write acccess to wework/ray. Also, you will need an `.npmrc` with the contents `//registry.npmjs.org/:_authToken=${NPM_TOKEN}`, where `NPM_TOKEN` is an NPM access token with write access to the WeWork organization. Then run:

```bash
$ yarn install
$ yarn build
$ yarn lerna:publish
```

## 👷🏻‍ Ownership

This repository is maintained by Demand Generation of Product Offerings & Growth at WeWork.

Its lead maintainer is [Adam Raider](https://github.com/adamraider), please either [submit an issue](https://github.com/wework/ray/issues/new) or reach out to Adam at [adam.raider@wework.com](mailto:adam.raider@wework.com) for questions or concerns.
