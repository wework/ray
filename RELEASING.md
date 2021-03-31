# Releasing

We use conventional commits to dynamically version the packages. It's imperative that maintainers of Ray `squash and merge` all pull requests and edit the commit message/description to follow the guidelines of [Conventional Commits][conventional-commits]. All releases must follow [Semantic Versioning][semver].

## Automatic Releases

Releases are automatically created when a commit is merged into master. Lerna will automatically determine the correct version for each package based on the contents of the commits. Circle CI will kick off a job, bump the version and publish to the npm registry.

> Note: All packages within the repo that contain `private: true` in its `package.json` will not be published to the registry.

The [Ray documentation site](https://ray.wework.com/) is automatically built and published on Netlify after any merge to master. Deploy previews are also available on any pull request.

## Manual Publish

Manual publishing is not recommended, and may result in unexpected behavior. If a manual release needs to be created for some reason, a Ray maintainer may do the following:

> Note: Ensure you are logged into NPM (`npm whoami`/`npm login`) with an account with write access to the `@wework` NPM space

```bash
$ yarn bootstrap
$ yarn build
$ yarn lerna:publish
```

[conventional-commits]: https://www.conventionalcommits.org
[semver]: https://semver.org/
