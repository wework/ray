# Development

Welcome to Ray, and thank you for contributing. Let's get you setup!

## Setup

Clone the project and `cd` into the directory.

```bash
$ git clone git@github.com:WeWork/ray.git
$ cd ray
```

You will need to install [Node.js][node] and [npm] in order to run the project.

Then install dependencies and bootstrap Lerna.

```bash
$ yarn bootstrap
```

## Structure

Ray is a multi-package repository powered by [Lerna]. These packages can be found in `packages/`.

The primary packages are

| Package            | Description                               |
| ------------------ | ----------------------------------------- |
| packages/core/     | CSS and JS that make up the design system |
| packages/docs-app/ | A documentation site built with Gatsby    |

## Workflow

After following the setup instructions above, you can use these steps to begin your contributions to the design system.

1. Start the development servers

```bash
# Spin up both the storybook and docs servers
$ yarn dev

# Run only the storybook server
$ yarn dev:core

# Run only the documentation server
$ yarn dev:docs
```

2. Modify or create new SCSS/JS in the `packages/core/src` directory
3. Modify or create new stories in the `packages/core/stories/` directory
4. Modify or create new documentation in the `docs/` directory
5. Test your changes (and write tests if applicable): `yarn test`
6. Commit and push your changes to GitHub and create a pull-request.
7. Wait for a review by the maintainers.

### Storybook

This is a playground for developers to build and test their HTML/CSS/JS. It runs React for ease of development.

We also use storybook in our continuous integration for visual regression testing. So it's key that stories exist for every component.

Open up `localhost:3000` to find the storybook.

### Documentation

Our documentation is built with GastbyJS, with content sourced from the markdown in `docs/**/*.md`.

Open up `localhost:8000` to find the docs site.

[node]: https://nodejs.org/
[npm]: https://docs.npmjs.com/cli/install
[lerna]: https://lerna.js.org/
[conventional commit]: https://www.conventionalcommits.org/en/v1.0.0-beta.2/#summary
