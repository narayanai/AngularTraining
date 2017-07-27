import { NgcartappPage } from './app.po';

describe('ngcartapp App', () => {
  let page: NgcartappPage;

  beforeEach(() => {
    page = new NgcartappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
