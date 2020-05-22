const Browser = require('zombie');
const app = require('../app');
const http = require('http')

describe('contact page', function() {
  beforeAll((done) => {
    this.server = http.createServer(app).listen(3000);
    // initialize the browser using the same port as the test application
    this.browser = new Browser({ site: 'http://localhost:3000' });
    this.browser.visit('/', done);
  });

  it('should show Foo on h2', () => {
    expect(this.browser.success).toBe(true)
    expect(this.browser.text('#ayam')).toBe('FOO')
  })

});