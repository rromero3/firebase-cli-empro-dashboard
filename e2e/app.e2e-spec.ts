import { EmproDashboardPage } from './app.po';

describe('empro-dashboard App', function() {
  let page: EmproDashboardPage;

  beforeEach(() => {
    page = new EmproDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
