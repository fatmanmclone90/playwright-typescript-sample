import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';

test.describe('Todo', { tag: '@withFixtures' }, () => {
  test('should allow me to add todo items', async ({ toDoPage }) => {
    const text = 'some text';

    await test.step('Given a user wants to create a to-do', () => {
      // empty
    });

    await test.step('When the user presses enter', async () => {
      await toDoPage.createToDo([text]);
    });

    await test.step('Then the to-do is added to the list', async () => {
      const toDoItems = await toDoPage.getAllToDos();
      await expect(toDoItems).toHaveLength(1);
      await expect(toDoItems[0]).toHaveText([text]);
    });
  });

  test('should allow me to delete items', async ({ toDoPage }) => {
    const text = 'some text';
    const otherText = 'some other text';
    await toDoPage.createToDo([text, otherText]);

    await toDoPage.deleteToDo(text);

    const toDoItems = await toDoPage.getAllToDos();
    await expect(toDoItems).toHaveLength(1);
    await expect(toDoItems[0]).toHaveText([otherText]);
  });

  test('should allow me to complete an item', async ({ toDoPage }) => {
    const text = 'some text';
    const otherText = 'some other text';
    await toDoPage.createToDo([text, otherText]);

    await toDoPage.completeItem(text);

    const item = await toDoPage.getToDo(text);
    await expect(item).toHaveClass('completed');
  });

  test('filter only completed items', async ({ toDoPage }) => {
    const text = 'some text';
    const otherText = 'some other text';
    await toDoPage.createToDo([text, otherText]);

    await toDoPage.completeItem(text);
    await await toDoPage.filterCompleted();

    const toDoItems = await toDoPage.getAllToDos();
    await expect(toDoItems).toHaveLength(1);
    await expect(toDoItems[0]).toHaveText([text]);
  });

  test('filter only active items', async ({ toDoPage }) => {
    const text = 'some text';
    const otherText = 'some other text';
    await toDoPage.createToDo([text, otherText]);

    await toDoPage.completeItem(text);
    await await toDoPage.filterActive();

    const toDoItems = await toDoPage.getAllToDos();
    await expect(toDoItems).toHaveLength(1);
    await expect(toDoItems[0]).toHaveText([otherText]);
  });

  test('clear completed items', async ({ toDoPage }) => {
    const text = 'some text';
    const otherText = 'some other text';
    await toDoPage.createToDo([text, otherText]);

    await toDoPage.completeItem(text);
    await await toDoPage.clearCompletedItems();

    const toDoItems = await toDoPage.getAllToDos();
    await expect(toDoItems).toHaveLength(1);
    await expect(toDoItems[0]).toHaveText([otherText]);
  });
});
