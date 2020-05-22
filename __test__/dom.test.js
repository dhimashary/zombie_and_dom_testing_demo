const request = require('supertest')
const app = require('../app')

describe('contact page', function() {

  it('should show Foo on rendered element', (done) => {
    request(app)
      .get('/')
      .end(function(err, res) {
        if (err) throw err
        const testWeb = document.createElement(null)
        testWeb.innerHTML = res.text
        const textContent = testWeb.querySelector('#ayam').innerHTML
        // contoh mendapat multiple value
        const h1List = Array.from(testWeb.querySelectorAll('h1'))
        const h1ContentList = h1List.map(el => el.innerHTML)
        console.log(h1ContentList, '<><><><>')
        //
        expect(textContent).toBe('FOO')
        done()
      });
  })
})