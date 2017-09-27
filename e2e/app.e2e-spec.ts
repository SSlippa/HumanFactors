import { UITestPage } from './app.po';

describe('uitest App', () => {
  let page: UITestPage;

  beforeEach(() => {
    page = new UITestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
