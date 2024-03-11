import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('');
});

test.describe('New Todo', () => {
  test('should allow me to add todo items - normal', async ({ page }) => {
    const text = 'some text no pom';

    const newToDo = page.getByPlaceholder('What needs to be done?');
    await newToDo.fill(text);
    await newToDo.press('Enter');

    const toDoItems = await page.getByTestId('todo-title').all();
    await expect(toDoItems).toHaveLength(1);
    await expect(toDoItems[0]).toHaveText([text]);
  });
});
