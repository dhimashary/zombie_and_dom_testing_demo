const request = require('supertest')
const app = require('../app')
const {
  getByTestId,
  queryByTestId
} = require('@testing-library/dom') 
require('@testing-library/jest-dom/extend-expect') 

describe('contact page', function() {

  it('should show Foo on rendered element', (done) => {
    request(app)
      .get('/')
      .end(function(err, res) {
        if (err) throw err
        const testWeb = document.createElement(null)
        testWeb.innerHTML = res.text
        const textContent = testWeb.querySelector('#ayam')
        // contoh mendapat multiple value
        const h1List = Array.from(testWeb.querySelectorAll('h1'))
        const h1ContentList = h1List.map(el => el.innerHTML)
        //
        expect(h1ContentList).toEqual(expect.arrayContaining(['Hai', 'Judul']))
        expect(getByTestId(testWeb, 'username')).toHaveTextContent('hardim')
        expect(textContent).toHaveTextContent('FOO')
        done()
      });
  })
})