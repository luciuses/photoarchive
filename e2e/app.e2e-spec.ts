import { PhotoarchivePage } from './app.po';

describe('photoarchive App', () => {
  let page: PhotoarchivePage;

  beforeEach(() => {
    page = new PhotoarchivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
