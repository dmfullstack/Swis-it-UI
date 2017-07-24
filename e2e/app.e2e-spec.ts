import { SwisitUIPage } from './app.po';

describe('swisit-ui App', () => {
  let page: SwisitUIPage;

  beforeEach(() => {
    page = new SwisitUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
