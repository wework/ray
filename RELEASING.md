# Releasing

Releases are automatically created when a commit is merged into master. Circle CI will kick off a job, bump the version and publish to the npm registry.

If a manual release needs to be made, make sure you have a `GH_TOKEN`, a GitHub personal access token with write acccess to wework/ray. Also, you will need an `.npmrc` with the contents `//registry.npmjs.org/:_authToken=${NPM_TOKEN}`, where `NPM_TOKEN` is an NPM access token with write access to the WeWork organization. Then run:

```bash
$ yarn install
$ yarn build
$ yarn lerna:publish
```