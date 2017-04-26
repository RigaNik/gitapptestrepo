import { GitappPage } from './app.po';

describe('gitapp App', () => {
  let page: GitappPage;

  beforeEach(() => {
    page = new GitappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
