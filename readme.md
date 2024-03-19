# Playwright and Typescript

- Very basic example of playwright tests using the Page Object Model.
  - [Implementation](/tests//demo-todo-app.spec.ts) of POM using beforeEach
  - [Implementation](/tests/demo-todo-app-with-fixures.spec.ts) of POM using custom [fixtures](https://playwright.dev/docs/auth#testing-multiple-roles-with-pom-fixtures), using example from Playwright
- [Example](/tests/demo-todo-app.spec.ts) of Visual Regression Testing using Playwright

## Setup

Creating a basic playwright project:

1. Install [nvm](https://github.com/coreybutler/nvm-windows#installation--upgrades)

1. `nvm install lts`

1. `nvm switch xx.xx.xx`

1. `npm install -g npm@latest`

1. `npm install -g npx`

1. `mrdir playwright-typescript-sample`

1. `npm init playwright@latest`

## Testing the Install

1. `npx playwright test`

1. `npx playwright show-report`

## Linting

`npx eslint .` or `npx eslint . --fix`

`npx prettier . --check` or `npx prettier . --write`

## Checking for Updates

`npx npm-check-updates`

## Visual Testing

To execute Visual Regression Tests

`npx playwright test --grep @visual`

To force an update of snapshots

`npx playwright test --update-snapshots`

## To Do

1. Convert from legacy eslint file to flat config.  Eslint rules taken from [here](https://github.com/elaichenkov/playwright-example-recipes/blob/main/.gitignore)

1. Investigate the [Test Generator](https://playwright.dev/docs/codegen)

1. Add sample test [setup](https://playwright.dev/docs/auth#basic-shared-account-in-all-tests)

1. Get better test output in pipeline

1. Consider Allure reporting

1. Figure out how to update snapshots in a Github Action.  [Example](https://mmazzarolo.com/blog/2022-09-09-visual-regression-testing-with-playwright-and-github-actions/).

## Notebook

Other commands I will forget:

``` cmd
npx playwright test --ui

npx playwright install --with-deps

set PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml && npx playwright test --reporter=junit # Seems to cause issue with filename containing exrta space

npx playwright test --grep-invert @visual
```
