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

## [Release](https://github.com/wework/ray/releases)

Releases are automatically created when a commit is merged into master. Circle CI will kick off a job, bump the version and publish to the npm registry.

If a manual release needs to be made, make sure you have a `GH_TOKEN`, a GitHub personal access token with write acccess to wework/ray. Also, you will need an `.npmrc` with the contents `//registry.npmjs.org/:_authToken=${NPM_TOKEN}`, where `NPM_TOKEN` is an NPM access token with write access to the WeWork organization. Then run:

```bash
$ yarn install
$ yarn build
$ yarn lerna:publish
```

## Ownership

This repository is maintained by Demand Generation of Growth Tech at WeWork.

Its lead maintainer is [Adam Raider](https://github.com/adamraider), please either [submit an issue](https://github.com/wework/ray/issues/new) or reach out to Adam at [adam.raider@wework.com](mailto:adam.raider@wework.com) for questions or concerns.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://raider.tech"><img src="https://avatars1.githubusercontent.com/u/6812331?v=4" width="50px;" alt="adamraider"/><br /><sub><b>adamraider</b></sub></a><br /><a href="#maintenance-adamraider" title="Maintenance">🚧</a> <a href="https://github.com/wework/ray/commits?author=adamraider" title="Code">💻</a></td><td align="center"><a href="http://celesteglavin.com/"><img src="https://avatars3.githubusercontent.com/u/19141291?v=4" width="50px;" alt="Celeste Glavin"/><br /><sub><b>Celeste Glavin</b></sub></a><br /><a href="#maintenance-cmugla" title="Maintenance">🚧</a> <a href="https://github.com/wework/ray/commits?author=cmugla" title="Code">💻</a></td><td align="center"><a href="https://github.com/danaballasy"><img src="https://avatars1.githubusercontent.com/u/49689660?v=4" width="50px;" alt="danaballasy"/><br /><sub><b>danaballasy</b></sub></a><br /><a href="#design-danaballasy" title="Design">🎨</a></td><td align="center"><a href="http://evanzarowitz.com"><img src="https://avatars2.githubusercontent.com/u/13824279?v=4" width="50px;" alt="Evan Zarowitz"/><br /><sub><b>Evan Zarowitz</b></sub></a><br /><a href="https://github.com/wework/ray/commits?author=evzaro" title="Code">💻</a></td><td align="center"><a href="https://github.com/i8ramin"><img src="https://avatars3.githubusercontent.com/u/49030?v=4" width="50px;" alt="Ramin B."/><br /><sub><b>Ramin B.</b></sub></a><br /><a href="https://github.com/wework/ray/commits?author=i8ramin" title="Code">💻</a></td><td align="center"><a href="https://github.com/gmharrison"><img src="https://avatars0.githubusercontent.com/u/17712022?v=4" width="50px;" alt="gmharrison"/><br /><sub><b>gmharrison</b></sub></a><br /><a href="https://github.com/wework/ray/commits?author=gmharrison" title="Code">💻</a></td><td align="center"><a href="https://github.com/scottsandler"><img src="https://avatars0.githubusercontent.com/u/31866269?v=4" width="50px;" alt="Scott Sandler"/><br /><sub><b>Scott Sandler</b></sub></a><br /><a href="#content-scottsandler" title="Content">🖋</a></td></tr><tr><td align="center"><a href="http://alanfriedmandesign.com"><img src="https://avatars2.githubusercontent.com/u/1093435?v=4" width="50px;" alt="Alan Friedman"/><br /><sub><b>Alan Friedman</b></sub></a><br /><a href="https://github.com/wework/ray/commits?author=alanfriedman" title="Code">💻</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
