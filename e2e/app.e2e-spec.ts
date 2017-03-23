import { PadelAppPage } from './app.po';

import {} from 'jasmine';

describe('padel-app App', function() {
  let page: PadelAppPage;

  beforeEach(() => {
    page = new PadelAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
