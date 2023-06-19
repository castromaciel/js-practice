import Author from "./2.3-author.js"
import Book from "./2.3-book.js"

const author = new Author('Ismael López Quintero', '04/07/1983', 'spanish')
const book = new Book('Server Side Js', 'Publicaciones Universitarias', author, '01/01/2012', '123456789')

const bookTitle = book.title
const bookEditorial = book.editorial
const bookAuthor = book.author
const authorFullName = bookAuthor.fullName
const authorBirthDate = bookAuthor.birthDate
const authorNationality = bookAuthor.nationality
const bookFirstPublishDate = book.firstPublishDate
const bookIsbn = book.isbn

QUnit.test("Testing Book and Author", (assert) => {
  assert.equal(bookTitle, 'Server Side Js', 'Correct book title')
  assert.equal(bookEditorial, 'Publicaciones Universitarias', 'Correct book editorial')
  assert.equal(bookAuthor, author, 'Correct book author')
  assert.equal(authorFullName, 'Ismael López Quintero', 'Correct author full name')
  assert.equal(authorBirthDate, '04/07/1983', 'Correct author birth date')
  assert.equal(authorNationality,'spanish', 'Correct author nationality')
  assert.equal(bookFirstPublishDate, '01/01/2012', 'Correct book first publish date')
  assert.equal(bookIsbn, '123456789', 'Correct book isbn')
})