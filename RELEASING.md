# Releasing

We use conventional commits to dynamically version the packages. It's imperative that maintainers of Ray `squash and merge` all pull requests and edit the commit message/description to follow the guidelines of [Conventional Commits][conventional-commits]. All releases must follow [Semantic Versioning][semver].

## Canary

Canary releases are automatically created when a commit is merged into master. Circle CI will kick off a job, bump the version as `alpha` and publish to the npm registry.

## Versioning

When a stable version needs to be published, this can be done by any Ray maintainer.

- Make sure you have a `GH_TOKEN`, a GitHub personal access token with write access to wework/ray.
- Also, you will need an `.npmrc` with the contents `//registry.npmjs.org/:_authToken=${NPM_TOKEN}`, where `NPM_TOKEN` is an NPM access token with write access to the WeWork organization. Then run:

```bash
$ yarn bootstrap
$ yarn build
$ yarn lerna:publish
```

Lerna will automatically determine the correct version for each package based on the contents of the commits.

> Note: All packages within the repo that contain `private: true` in its `package.json` will not be published to the registry.

[conventional-commits]: https://www.conventionalcommits.org
[semver]: https://semver.org/
