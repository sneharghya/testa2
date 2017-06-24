import { Testa2Page } from './app.po';

describe('testa2 App', () => {
  let page: Testa2Page;

  beforeEach(() => {
    page = new Testa2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
