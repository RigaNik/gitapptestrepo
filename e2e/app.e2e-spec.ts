import { GitappPage } from './app.po';

describe('gitapp App', () => {
  let page: GitappPage;

  beforeEach(() => {
    page = new GitappPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
