import { XfitPage } from './app.po';

describe('xfit App', () => {
  let page: XfitPage;

  beforeEach(() => {
    page = new XfitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
