import { type Locator, type Page } from '@playwright/test';

export class ToDoPage {
  readonly page: Page;
  readonly whatNeedsToBeDone: Locator;
  readonly toDos: Locator;
  readonly completedFilter: Locator;
  readonly activeFilter: Locator;
  readonly clearCompletedItemsButton: Locator;
  private readonly DeleteButton: Locator

  constructor(page: Page) {
    this.page = page;
    this.whatNeedsToBeDone = page.getByPlaceholder('What needs to be done?');
    this.toDos = page.getByTestId('todo-title');
    this.completedFilter = page.getByRole('link', { name: 'Completed' });
    this.activeFilter = page.getByRole('link', { name: 'Active' });
    this.clearCompletedItemsButton = page.getByRole('button', { name: 'Clear Completed' });
    this.DeleteButton = this.page.getByRole('button', { name: 'Delete' });
  }

  async goto() {
    await this.page.goto('');
  }

  async createToDo(text: string[]) {
    for (const element of text) {
      const locator = await this.whatNeedsToBeDone;
      await locator.fill(element);
      await locator.press('Enter');
    }
  }

  async deleteToDo(text: string) {
    const item = await this.getToDo(text);
    await item.hover();
    await this.DeleteButton.click();
  }

  async getToDo(text: string): Promise<Locator> {
    return await this.page.locator('li').filter({ hasText: text });
  }

  async completeItem(text: string) {
    await this.page.locator('li').filter({ hasText: text }).getByLabel('Toggle Todo').click();
  }

  async getAllToDos(): Promise<Locator[]> {
    return await this.toDos.all();
  }

  async filterCompleted() {
    await this.completedFilter.click();
  }

  async filterActive() {
    await this.activeFilter.click();
  }

  async clearCompletedItems() {
    await this.clearCompletedItemsButton.click();
  }
}
