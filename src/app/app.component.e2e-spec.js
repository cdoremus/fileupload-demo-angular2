describe('App', function () {
  const title = 'Angular 2 File Upload Form with Spring Rest Controller Back End';
  beforeEach(function () {
    browser.get('/');
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual(title);
  });

  it('should have <header>', function () {
    expect(element(by.css('my-app header')).isPresent()).toEqual(true);
  });

  it('should have <main>', function () {
    expect(element(by.css('my-app main')).isPresent()).toEqual(true);
  });

  it('should have a main title', function () {
    expect(element(by.css('main h3')).getText()).toEqual(title);
  });

  it('should have <footer>', function () {
    expect(element(by.css('my-app footer')).getText()).toEqual("Webpack Angular 2 Starter");
  });

});
