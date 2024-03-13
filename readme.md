# Playwright and Typescript

- Very basic example of playwright tests using the Page Object Model.
- Example of Visual Regression Testing using Playwright

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

1. Get better test output in pipeline

1. Consider Allure reporting

## Notebook

Other commands I will forget:

``` cmd
npx playwright test --ui

npx playwright install --with-deps

set PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml && npx playwright test --reporter=junit # Seems to cause issue with filename containing exrta space
```
