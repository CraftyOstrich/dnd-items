import { DndItemsPage } from './app.po';

describe('dnd-items App', () => {
  let page: DndItemsPage;

  beforeEach(() => {
    page = new DndItemsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
