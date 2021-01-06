# Garbage Collector

[![Netlify Status](https://api.netlify.com/api/v1/badges/4ac241e8-17a5-40c5-ad4b-8a7c2881f996/deploy-status)](https://app.netlify.com/sites/garbage-collector-123/deploys)

## Deployment

We deploy our site on Netlify. Every commit to `main` is deployed automatically.

## Development

Our site is build with [Next.js](https://nextjs.org/). To develop locally you need to have some

### Requirements

You need to have 2 tools installed before using any described scripts.

- The latest [Node.js LTS](https://nodejs.org/de/download/) version
- [Yarn v1.x](https://classic.yarnpkg.com/lang/en/)

Download and install Node.js. Then you can simply call `npm i -g yarn expo-cli`. This will install and add both `yarn` and `expo-cli` to your PATH.

After these tools installed successfully, run `yarn` from the project root to install all required npm dependencies.

### Start server

For development run `yarn dev` to start a local server on `localhost:3001`.

If you want a more control over your developed output, take a look at our Storybook. Start it by running `yarn storybook`. A server at `localhost:9002` is started for you and gives a good overview over all components and pages.

### File structure

- `locales/` - JSONs with key-value string pairs for each supported language and namespace
- `scripts/` - Utility scripts that are used for some commands triggert by developers
- `src/components/` - Here are the reusable React components ordered using [`destiny`](https://github.com/benawad/destiny/wiki), the Fractal Project Structure prettier
- `src/graphql/` - GraphQL queries and mutations that are used to generate JS code into `generated` for easy usage.
- `src/graphql/generated/` - Code that is automatically generated through scripts. Do not modify manually.
- `src/lib/` - Utility functions that are used in one or more React components
- `src/pages/` - The routes of the app (`pages/api/index.ts` -> `localhost:3001/api`)
- `src/stories/` - Stories for pages that will show up in the Storybook
- `tests/e2e/` - All files related to tests with Cypress
- `public/` - Static hosted files for the Web-App (like `favicon.ico` to be available on `localhost:3001/favicon.ico`)

After you edit imports, exports or create new files in `src/components/` you can run `yarn rearange:components`, or `yarn destiny` to perform an automatic reorganization of the folder/file structure.

#### Generated folders

- `node_modules/` - Downloaded package dependencies
- `.next` - build output directory

### Generated code

After the GraphQL API was changed in the backend, the frontend code needs to be updated as well. This needs to be automated in this project.

As soon as we have a running graphql API and the configs are setup, you should be able to run `yarn graphql-codegen` and all your requests in `src/graphql/` are transformed into usable React hooks in the `src/graphql/generated/` folder.

### ⚙ Testing

We use [Cypress](https://www.cypress.io/) with visual testing to calculate the code coverage and check the integrity of the UI and UX behavior.

#### Run e2e tests

1. Run `yarn test:e2e`
2. If the command exited without any issues, everything works!

#### Run unit tests

1. Run `yarn test:unit`
2. If everything is green, everything works!

## Contribution

For new features please open a new branch. The name of the branch should start with the issue ID followed by a dash and the branch name (e.g. `10-my-feature`).

When you are ready with your implementation and tests, open a Merge Request (MR) and let your changes be reviewed by the code owner or 2 maintainers.
