import { test as base } from '@playwright/test';
import { ToDoPage } from '../page-objects/to-do-page';

type MyFixtures = {
  toDoPage: ToDoPage;
};

export * from '@playwright/test';
export const test = base.extend<MyFixtures>({
  toDoPage: async ({ browser }, use) => {
    const context = await browser.newContext();
    const toDoPage = new ToDoPage(await context.newPage());
    await toDoPage.goto();
    await use(toDoPage);
    await context.close();
  },
});
